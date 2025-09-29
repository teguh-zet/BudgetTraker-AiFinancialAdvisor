const { Op } = require('sequelize');
const { MonthlySummary, Transaction, User } = require('../../../models');
const NotFound = require('../../errors/NotFoundError');
const BadRequestError = require('../../errors/BadRequestError');
const config = require('../../config/config');
class MonthlySummaryService {
    async getAll() {
        return await MonthlySummary.findAll();
    }

    async getById(id) {
        const summary = await MonthlySummary.findByPk(id);
        if (!summary) throw new NotFound('Summary Bulanan Tidak ditemukan!');
        return summary
    }

    async create(data) {
        return await MonthlySummary.create(data);
    }

    async update(id, data) {
        const summary = await MonthlySummary.findByPk(id);
        if (!summary) throw new NotFound('Summary Bulanan Tidak ditemukan!');
        await summary.update(data);
        return summary
    }

    async delete(id) {
        const summary = await MonthlySummary.findByPk(id);
        if (!summary) throw new NotFound('Summary Bulanan Tidak ditemukan!');
        await summary.destroy();
        return true
    }
    

    async generate(userId) {
        const now = new Date();
        const month = now.toLocaleDateString("id-ID", { month: "long" });
        const year = now.getFullYear();

        const startOfMonth = new Date(year, now.getMonth(), 1);
        const endOfMonth = new Date(year, now.getMonth() + 1, 0);

        const startOfDay = new Date(now.getFullYear, now.getMonth(), now.getDate, 0, 0, 0, 0);
        const endOfDay = new Date(now.getFullYear, now.getMonth(), now.getDate, 23, 59, 59, 999);

        const existing = await MonthlySummary.findOne({
            where: {
                user_id: userId,
                created_at: { [Op.gte]: startOfDay, [Op.lte]: endOfDay }
            },
        });

        if (existing) {
            throw new BadRequestError("Summary Hari ini sudah di generate, coba lagi besok.");
        }

        const transactions = await Transaction.findAll({
            where: {
                user_id: userId,
                date: { [Op.between]: [startOfMonth, endOfMonth] }
            },
            include: ["category"]
        });

        const user = await User.findByPk(userId);
        if (!user) throw new NotFound("Pengguna Tidak Ditemukan!");

        let totalIncome = 0;
        let totalExpense = 0;

        const formattedTx = transactions.map((tx) => {
            const amount = parseInt(tx.amount);
            if (tx.type === "income") totalIncome += amount;
            if (tx.type === "expense") totalExpense += amount;

            return {
                type: tx.type === "income" ? "pemasukan" : "pengeluaran",
                category: tx.category?.name || "Lainnya",
                amount,
                date: tx.date.toISOString().split("T")[0]
            }
        });

        const payload = {
            user: user.name,
            month: `${month} ${year}`,
            transactions: formattedTx,
            total_income: totalIncome,
            total_expense: totalExpense
        };

        const body = {
            model: "x-ai/grok-4-fast:free",
            messages: [
                {
                    role: "system",
                    content: `Posisikan Dirimu sebagai Ahli Keuangan dan Buat Ringkasan keuangan dari data JSON berikut.
                    Hasilkan dalam format JSON yang valid dan HARUS memiliki struktur seperti ini:
                    {
                        "summary": "string",
                        "recommendations": ["string", "string", "..."],
                        "trend_analysis": "string"
                    }
                    Gunakan bahasa Indonesia untuk isinya. jangan ubah nama key apapun. dan jangan Tambahkan \`\`\`json.
                    `,
                },
                {
                    role: "user",
                    content: JSON.stringify(payload)
                }
            ]
        };

        const delay = (ms) => new Promise((res) => setTimeout(res, ms));
        let retries = 3;
        let response;

        while (retries > 0) {
            response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${config.llm.openRouter}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body),
            });

            if (response.status !== 429) break;

            await delay(3000);
            retries--;
        };

        // if(!response.ok) {
        //     throw new BadRequestError("Terjadi Kesalahan, Harap Di Coba Lagi");
        // }
        // KODE BARU (Untuk Debugging)
        if (!response.ok) {
            // Baca detail error dari response OpenRouter
            const errorDetail = await response.json();

            // Tampilkan error asli di console backend Anda
            console.error("Error from OpenRouter:", errorDetail);

            // Lempar error yang lebih informatif
            throw new BadRequestError(`Gagal menghubungi AI Service: ${errorDetail.error?.message || response.statusText}`);
        }
        const result = await response.json();

        const content = result.choices?.[0]?.message?.content || "";

        let parsed;
        try {
            const cleaned = content.replace(/```json\s*|\s*```/g, "").trim();
            parsed = JSON.parse(cleaned);

            if (!parsed.summary || !parsed.recommendations || !parsed.trend_analysis) {
                throw new BadRequestError("Struktur JSON Tidak Lengkap");
            }
        } catch (error) {
            throw new BadRequestError("Gagal Mengurai Response JSON dari LLM, Harap Di Coba Lagi!");
        }

        const summary = await MonthlySummary.create({
            user_id: userId,
            month,
            year: String(year),
            total_income: String(totalIncome),
            total_expense: String(totalExpense),
            balance: String(totalIncome - totalExpense),
            ai_summary: parsed.summary,
            ai_recomendation: [...parsed.recommendations, parsed.trend_analysis].join("\n")
        });

        return {
            summary: parsed.summary,
            recommendations: parsed.recommendations,
            trend_analysis: parsed.trend_analysis
        }
    }
}

module.exports = new MonthlySummaryService();