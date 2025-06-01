"use client";
import React, { useState, useEffect } from "react";
import formatRupiah from "@/utils/formatRupiah";
import TransactionCard from "@/ui/TransactionCard";
import { FaSearch, FaPlus } from "react-icons/fa";
import Link from "next/link";

export default function TransactionPage() {
  return (
    <div className="p-4 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TransactionCard
          title="Total Pengeluaran Hari Ini"
          value={formatRupiah(20000)}
        />
        <TransactionCard title="Jumlah Transaksi Hari Ini" value={5} />
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="relative w-full sm:max-w-xs">
          <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Cari Transaksi..."
            className="pl-10 pr-4 py-2 border rounded-md w-full text-sm"
          />
        </div>

        <Link
          href="/dashboard/transaction/create"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md flex 
          items-center justify-center gap-2 hover:bg-indigo-700 w-full sm:w-fit"
        >
            <FaPlus /> Buat Transaksi
        </Link>
      </div>
    </div>
  );
}
