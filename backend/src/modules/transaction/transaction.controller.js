const BadRequestError = require('../../errors/BadRequestError');
const ForbiddenError = require('../../errors/ForbiddenError');
const TransactionService = require('./transaction.service');


class TransactionController {
    async getAll(req, res, next) {
        try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || "";

        const result = await TransactionService.getAllByUser(req.userId, page, limit, search);

        res.json({
            success: true,
            message: "Daftar transaksi kamu",
            data: result.data,
            pagination: result.pagination,
        });
        } catch (error) {
        next(error);
        }
    }

    async getById(req, res, next) {
        try {
            const transaction = await TransactionService.getById(req.params.id);
            if(transaction.user_id !== req.userId) {
                return ForbiddenError("Kamu tidak bisa Akses transaksi ini")
            }
            res.status(200).json({succes: true, message: "transaksi ditemukan", data: transaction});
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const data = {
                ...req.body,
                user_id: req.userId
            }
            const transaction = await TransactionService.create(data);
            res.status(201).json({succes: true, message: "transaksi sudah terbuat", data: transaction});
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next) {
        try {
            const transaction = await TransactionService.getById(req.params.id);
            if(transaction.user_id !== req.userId) {
                throw new ForbiddenError("Kamu tidak bisa Akses transaksi ini")
            }

            const data = { ...req.body };
            delete data.user_id;

            await TransactionService.update(req.params.id, data)
            res.status(200).json({succes: true, message: "transaksi sudah terupdate"});
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next) {
        try {
            await TransactionService.delete(req.params.id);
            res.status(200).json({succes: true, message: "transaksi sudah di hapus"});
        } catch (error) {
            next(error);
        }
    }

    async getMonthlySummary(req, res, next) {
        try {
            const data = await TransactionService.getMonthlySummary(req.userId);
            res.status(200).json({succes: true, message: "summary data berhasil di ambil", data});
        } catch (error) {
            next(error);
        }
    }

    async getMonthlyChart(req, res, next) {
        try {
            const data = await TransactionService.getMonthlyChart(req.userId);
            res.status(200).json({succes: true, message: "chart data berhasil di ambil", data});
        } catch (error) {
            next(error);
        }
    }

    async getTodayTransaction(req, res, next) {
        try {
            const data = await TransactionService.getTodayTransactions(req.userId);
            res.status(200).json({succes: true, message: "data transaksi hari ini berhasil di ambil", data});
        } catch (error) {
            next(error);
        }
    }

    async getTodayExpense(req, res, next) {
        try {
            const data = await TransactionService.getTodayExpenseStats(req.userId);
            res.status(200).json({succes: true, message: "data pengeluaran hari ini berhasil di ambil", data});
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TransactionController();