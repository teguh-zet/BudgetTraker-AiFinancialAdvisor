module.exports = {

"[project]/src/utils/formatRupiah.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>formatRupiah)
});
function formatRupiah(harga) {
    return `rp. ${harga.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })}`;
}
}}),
"[project]/src/app/dashboard/transaction/page.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/app/dashboard/transaction/page.tsx'

Expected ',', got 'export'`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),

};

//# sourceMappingURL=src_3389397b._.js.map