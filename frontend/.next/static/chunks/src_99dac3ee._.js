(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/utils/getTokenHeader.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>getTokenHeader)
});
function getTokenHeader() {
    const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("token") : ("TURBOPACK unreachable", undefined);
    return token ? {
        Authorization: `Bearer ${token}`
    } : {};
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/category.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createCategory": (()=>createCategory),
    "deleteCategory": (()=>deleteCategory),
    "fetchAllCategories": (()=>fetchAllCategories),
    "fetchCategoryById": (()=>fetchCategoryById),
    "updateCategory": (()=>updateCategory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/handleApiError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getTokenHeader.ts [app-client] (ecmascript)");
;
;
;
const fetchAllCategories = async ()=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/category', {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Failed to fetch categories");
    }
};
const fetchCategoryById = async (id)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/category/${id}`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Failed to fetch category id");
    }
};
const createCategory = async (data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/category', data, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Failed to fetch categories");
    }
};
const updateCategory = async (id, data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/category/${id}`, data, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Failed to fetch categories");
    }
};
const deleteCategory = async (id)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/category/${id}`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Failed to fetch categories");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/convertNumRupiah.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>formatRupiah)
});
function formatRupiah(value) {
    const number = parseInt(value.replace(/\D/g, ""));
    return isNaN(number) ? "" : new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(number);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/pages/TransactionForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$category$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/category.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$convertNumRupiah$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/convertNumRupiah.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TransactionForm = ({ initialData, onSubmit })=>{
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: "expense",
        amount: "",
        date: new Date().toISOString().slice(0, 10),
        note: "",
        categoryId: ""
    });
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const loadCategories = async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$category$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAllCategories"])();
            setCategories(res.data);
        } catch (error) {
            if (error instanceof Error) {
                console.error({
                    message: error.message,
                    type: "danger"
                });
            } else {
                console.error({
                    message: "Terjadi Kesalahan",
                    type: "danger"
                });
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionForm.useEffect": ()=>{
            if (initialData) {
                setForm({
                    ...initialData,
                    categoryId: String(initialData.categoryId),
                    amount: String(initialData.amount)
                });
            }
        }
    }["TransactionForm.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TransactionForm.useEffect": ()=>{
            loadCategories();
        }
    }["TransactionForm.useEffect"], []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        if (name === "amount") {
            const clean = value.replace(/\D/g, "");
            const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$convertNumRupiah$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(clean);
            setForm((prev)=>({
                    ...prev,
                    amount: formatted
                }));
            return;
        }
        setForm((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        const cleanedAmount = form.amount.replace(/\D/g, "");
        const payload = {
            ...form,
            amount: cleanedAmount,
            categoryId: parseInt(String(form.categoryId))
        };
        onSubmit(payload);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-4 max-w-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "tipe",
                        className: "block mb-1 text-sm",
                        children: "Tipe"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "type",
                        value: form.type,
                        onChange: handleChange,
                        className: "w-full border px-3 py-2 rounded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "income",
                                children: "Pemasukan"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/TransactionForm.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "expense",
                                children: "Pengeluaran"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/TransactionForm.tsx",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/TransactionForm.tsx",
                lineNumber: 80,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "jumlah",
                        className: "block mb-1 text-sm",
                        children: "Jumlah"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "amount",
                        value: form.amount,
                        onChange: handleChange,
                        className: "w-full border px-3 py-2 rounded",
                        placeholder: "Contoh: Rp. 10.000",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/TransactionForm.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "tanggal",
                        className: "block mb-1 text-sm",
                        children: "Tanggal"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        name: "date",
                        value: form.date,
                        onChange: handleChange,
                        className: "w-full border px-3 py-2 rounded",
                        placeholder: "Contoh: Rp. 10.000",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/TransactionForm.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "catatan",
                        className: "block mb-1 text-sm",
                        children: "Catatan"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "note",
                        value: form.note,
                        onChange: handleChange,
                        className: "w-full border px-3 py-2 rounded",
                        placeholder: "Masukkan Catatan...",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 121,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/TransactionForm.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "catatan",
                        className: "block mb-1 text-sm",
                        children: "Kategori"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 133,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "categoryId",
                        value: form.categoryId,
                        onChange: handleChange,
                        className: "w-full border px-3 py-2 rounded",
                        required: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "-- Pilih Kategori --"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/TransactionForm.tsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, this),
                            categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: category.id,
                                    children: category.name
                                }, category.id, false, {
                                    fileName: "[project]/src/pages/TransactionForm.tsx",
                                    lineNumber: 143,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/TransactionForm.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/TransactionForm.tsx",
                lineNumber: 132,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700",
                children: "Simpan"
            }, void 0, false, {
                fileName: "[project]/src/pages/TransactionForm.tsx",
                lineNumber: 150,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/TransactionForm.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, this);
};
_s(TransactionForm, "wKNppM+HFPL6+6ixBMy2QYusIw0=");
_c = TransactionForm;
const __TURBOPACK__default__export__ = TransactionForm;
var _c;
__turbopack_context__.k.register(_c, "TransactionForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ui/Modal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Modal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ai/index.mjs [app-client] (ecmascript)");
;
;
;
const iconMap = {
    information: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineInfoCircle"], {
        className: "text-blue-500 w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/ui/Modal.tsx",
        lineNumber: 12,
        columnNumber: 16
    }, this),
    success: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineCheckCircle"], {
        className: "text-green-500 w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/ui/Modal.tsx",
        lineNumber: 13,
        columnNumber: 12
    }, this),
    warning: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineWarning"], {
        className: "text-yellow-500 w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/ui/Modal.tsx",
        lineNumber: 14,
        columnNumber: 12
    }, this),
    danger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiOutlineCloseCircle"], {
        className: "text-red-500 w-6 h-6"
    }, void 0, false, {
        fileName: "[project]/src/ui/Modal.tsx",
        lineNumber: 15,
        columnNumber: 11
    }, this)
};
function Modal({ message, type = "information", onOk, onCancel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-sm mx-auto rounded-lg shadow-lg p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: iconMap[type]
                        }, void 0, false, {
                            fileName: "[project]/src/ui/Modal.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-800 font-medium",
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/src/ui/Modal.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/ui/Modal.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/ui/Modal.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex justify-end gap-3",
                    children: [
                        onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            className: "px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/ui/Modal.tsx",
                            lineNumber: 31,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onOk || (()=>{}),
                            className: "px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700",
                            children: "OK"
                        }, void 0, false, {
                            fileName: "[project]/src/ui/Modal.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/ui/Modal.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/ui/Modal.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/ui/Modal.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this), document.body);
}
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/ui/LoadingSpinnerScreen.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LoadingSpinnerScreen)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LoadingSpinnerScreen() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"
        }, void 0, false, {
            fileName: "[project]/src/ui/LoadingSpinnerScreen.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/ui/LoadingSpinnerScreen.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = LoadingSpinnerScreen;
var _c;
__turbopack_context__.k.register(_c, "LoadingSpinnerScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/transaction.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createTransaction": (()=>createTransaction),
    "deleteTransaction": (()=>deleteTransaction),
    "editTransaction": (()=>editTransaction),
    "fetchMonthlyChart": (()=>fetchMonthlyChart),
    "fetchMonthlySummary": (()=>fetchMonthlySummary),
    "fetchTodayTransaction": (()=>fetchTodayTransaction),
    "fetchTotalExpenseStat": (()=>fetchTotalExpenseStat),
    "fetchTransaction": (()=>fetchTransaction),
    "fetchTransactionById": (()=>fetchTransactionById)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/handleApiError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/getTokenHeader.ts [app-client] (ecmascript)");
;
;
;
const fetchTransaction = async (page = 1, limit = 10, search = "")=>{
    try {
        const params = new URLSearchParams({
            page: String(page),
            limit: String(limit)
        });
        if (search) params.append("search", search);
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/transaction?${params.toString()}`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Transaction Error");
    }
};
const fetchTransactionById = async (id)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/transaction/${id}`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Transaction Error");
    }
};
const createTransaction = async (data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/transaction`, data, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Transaction Error");
    }
};
const editTransaction = async (id, data)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/transaction/${id}`, data, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Transaction Error");
    }
};
const deleteTransaction = async (id)=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/transaction/${id}`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Transaction Error");
    }
};
const fetchMonthlySummary = async ()=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/transaction/monthly-summary`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Transaction Error");
    }
};
const fetchMonthlyChart = async ()=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/transaction/monthly-chart`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Transaction Error");
    }
};
const fetchTodayTransaction = async ()=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/transaction/today`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Transaction Error");
    }
};
const fetchTotalExpenseStat = async ()=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/transaction/today-expense-stats`, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getTokenHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])()
        });
        return res.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Transaction Error");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/transaction/create/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CreateTransactionPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$TransactionForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/TransactionForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$LoadingSpinnerScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ui/LoadingSpinnerScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/transaction.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CreateTransactionPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isSubmitting, setISubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async (form)=>{
        setISubmitting(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$transaction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTransaction"])({
                ...form,
                category_id: form.categoryId
            });
            setModal({
                type: "success",
                message: "Transaksi Berhasil Ditambahkan"
            });
        } catch (error) {
            if (error instanceof Error) {
                setModal({
                    message: error.message,
                    type: "danger"
                });
            } else {
                setModal({
                    message: "Terjadi Kesalahan",
                    type: "danger"
                });
            }
        } finally{
            setISubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Buat Transaksi Baru"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/transaction/create/page.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            isSubmitting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$LoadingSpinnerScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/transaction/create/page.tsx",
                lineNumber: 42,
                columnNumber: 30
            }, this),
            modal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: modal.type,
                message: modal.message,
                onOk: ()=>{
                    setModal(null);
                    if (modal.type === "success") {
                        router.push('/dashboard/transaction');
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/transaction/create/page.tsx",
                lineNumber: 44,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$TransactionForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onSubmit: handleSubmit
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/transaction/create/page.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/transaction/create/page.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_s(CreateTransactionPage, "Clm1Vc4elZeqTzPVUZ08Wvh5syE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CreateTransactionPage;
var _c;
__turbopack_context__.k.register(_c, "CreateTransactionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_99dac3ee._.js.map