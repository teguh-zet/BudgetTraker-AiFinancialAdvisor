"use client"
import React, { useState, useEffect } from "react";
import { StatCard } from "@/ui/StatCard";
import { 
    FaPiggyBank,
    FaWallet,
    FaArrowDown,
    FaArrowUp,
} from "react-icons/fa";
import formatRupiah from "@/utils/formatRupiah";
import {
    fetchMonthlyChart,
    fetchMonthlySummary,
    fetchTodayTransaction
} from "@/services/transaction";
import { profile as fetchProfile } from "@/services/auth";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { ChartPoint, SummaryData, Transaction } from "@/interfaces/IDashboard";
import { STRING_LITERAL_DROP_BUNDLE } from "next/dist/shared/lib/constants";

export default function DashboardPage() {
    const [chartData, setChartData] = useState<ChartPoint[]>([]);
    const [summary, setSummary] = useState<SummaryData | null>(null);
    const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);
    const [user, setUser] = useState<{ name?: string}>({});

    const fetchData = async () => {
        try{
            const [chart, summaryRes, recent, profileRes] = await Promise.all([
                fetchMonthlyChart(),
                fetchMonthlySummary(),
                fetchTodayTransaction(),
                fetchProfile(localStorage.getItem("token") || "")
            ]);

            setChartData(chart.data);
            setSummary(summaryRes.data);
            setRecentTransactions(recent.data);
            setUser(profileRes.data || {});
        } catch(error) {
            if(error instanceof Error) {
                console.error({message: error.message, type: "danger"});
            } else {
                console.error({message: "Terjadi Kesalahan", type: "danger"})
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const dateNow = new Date().toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
  return (
    <div className="p-3 space-y-6">
        {/* header div content */}
      <div className="flex flex-col gap-8 text-white bg-gradient-to-r 
      from-indigo-900 to-indigo-600 rounded-xl p-6">
        {/* top content */}
        <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
                <h2 className="text-3xl font-semibold">Wellcome Back, User!</h2>
                <p className="text-md mt-1 font-normal">
                    Insights at a glance: empowering your financial journey.
                </p>
            </div>

            <div className="text-right text-md text-white">
                <p className="font-medium">
                    {dateNow}
                </p>
            </div>
        </div>
        {/* stat content => bottom content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard 
                title="Total Balance"
                value={formatRupiah(summary?.balance) || 0}
                icon={<FaWallet size={24} />}
                change="This Month"
                color="text-gray-600"
            />
            <StatCard 
                title="Total Savings"
                value={formatRupiah(summary?.saving) || 0}
                icon={<FaPiggyBank size={24} />}
                change="For Recommendation"
                color="text-gray-600"
            />
            <StatCard 
                title="Total Income"
                value={formatRupiah(summary?.income) || 0}
                icon={<FaArrowUp size={24} />}
                change="This Month"
                color="text-gray-600"
            />
            <StatCard 
                title="Total Expense"
                value={formatRupiah(summary?.expense) || 0}
                icon={<FaArrowDown size={24} />}
                change="This Month"
                color="text-gray-600"
            />
        </div>
      </div>

      {/* Chart pemasukan dan pengeluaran */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 pb-16 rounded-lg shadow lg:col-span-3 h-[61vh]">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Money Flow</h3>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                    <XAxis 
                        dataKey="date"
                        tickFormatter={(date) => {
                            const day = new Date(date).getDate();
                            return String(day).padStart(2, "0");
                        }}
                    />
                    <YAxis 
                        tickFormatter={(value) => `${value.toLocaleString("id-ID")}`}
                        tick={{ fontSize: 10 }}
                    />
                    <Tooltip 
                        formatter={(value: number) => `${value.toLocaleString("id-ID")}`}
                        labelFormatter={(label) => {
                            const d = new Date(label);
                            return `Tanggal ${String(d.getDate()).padStart(2, "0")}`;
                        }}
                    />
                    <Line 
                        type="monotone"
                        dataKey="income"
                        stroke="#4f46e5"
                        strokeWidth={2}
                        isAnimationActive={true}
                        animationDuration={1200}
                    />
                    <Line 
                        type="monotone"
                        dataKey="expense"
                        stroke="#dc2626"
                        strokeWidth={2}
                        isAnimationActive={true}
                        animationDuration={1200}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow overflow-auto h-full">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-md font-bold">Recent Transaction</h3>
            </div>

            <table className="w-full text-xs text-left">
                <thead>
                    <tr className="text-gray-500 border-b">
                        <th className="py-2">Tx</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {recentTransactions.map((tx, i: number) => (
                        <tr key={i} className="border-t text-gray-600">
                            <td className="py-3 font-medium">
                                <div className="text-sm font-semibold">{tx.category?.name || "-"}</div>
                                <div className="text-xs text-gray-400">{
                                    new Date(tx.date).toLocaleDateString("id-ID", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    })    
                                }</div>
                            </td>
                            <td className={`text-sm font-bold ${tx.type === "expense" ? "text-red-500" : "text-green-500"}`}>
                                {formatRupiah(parseInt(tx.amount))}
                            </td>
                        </tr>
                    ))}
                    {recentTransactions.length === 0 && (
                        <tr>
                            <td colSpan={2} className="text-center py-4 text-gray-400">No Recent Transactions</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
