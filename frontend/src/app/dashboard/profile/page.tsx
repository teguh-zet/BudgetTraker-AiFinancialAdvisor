"use client"

import React, { useEffect, useState } from "react";
import { profile as fetchProfile } from "@/services/auth";
import { updateUser } from "@/services/user";
import LoadingSpinnerScreen from "@/ui/LoadingSpinnerScreen";
import Modal from "@/ui/Modal";
import { ModalProps } from "@/interfaces/IModal";

export default function Profilepage() {
    const [form, setForm] = useState({
        id: 0,
        name: "",
        email: "",
        number: ""
    });

    const [loading, setLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modal, setModal] = useState<ModalProps | null> (null);

    const loadProfile = async () => {
        try {
            const token = localStorage.getItem("token");
            if(!token) return;
            const res = await fetchProfile(token);

            const rawNumber = res.data.number || "";
            const cleanNumber = rawNumber.startsWith("+62") ? rawNumber.replace("+62", "") : rawNumber;

            setForm({
                ...res.data,
                number: cleanNumber
            })
        } catch (error) {
            if(error instanceof Error) {
                setModal({ message: error.message, type: "danger"})
            } else {
                setModal({ message: "Terjadi Kesalahan", type: "danger"})
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadProfile();
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        const sanitizedValue = name === "number" ? value.replace(/[^0-9]/g, "") : value;
        setForm((prev) => ({...prev, [name]: sanitizedValue}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const updated = await updateUser(form.id, {
                name: form.name,
                email: form.email,
                number: `+62${form.number}`
            });
            setForm({
                ...updated.data,
                number: updated.data.number.replace("+62", ""),
            });
            setModal({ message: "Profil Berhasil Diperbarui", type: "success"})
        } catch (error) {
            if(error instanceof Error) {
                setModal({ message: error.message, type: "danger"})
            } else {
                setModal({ message: "Terjadi Kesalahan", type: "danger"})
            }
        }
    }

    return (
        <div className="max-w-xl mx-auto p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Profil Pengguna</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">Nama</label>
                    <input 
                        type="text" 
                        value={form.name}
                        onChange={handleChange}
                        name="name"
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                    <input 
                        type="email" 
                        value={form.email}
                        onChange={handleChange}
                        name="email"
                        className="w-full border rounded px-4 py-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="number" className="block mb-1 text-sm font-medium text-gray-700">Nomor Telepon</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-sm">+62</div>
                        <input 
                            type="text" 
                            value={form.number}
                            onChange={handleChange}
                            name="number"
                            className="w-full border rounded px-4 py-2 pl-12"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    {isSubmitting ? "Menyimpan..." : "Simpan Perubahan"}
                </button>
            </form>

            {modal && (
                <Modal 
                    type={modal.type}
                    message={modal.message}
                    onOk={() => setModal(null)}
                />
            )}
        </div>
    )   
}