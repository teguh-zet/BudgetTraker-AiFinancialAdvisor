module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/api/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: process.env.NEXT_APP_BASE_URL_V1,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});
const __TURBOPACK__default__export__ = api;
}}),
"[project]/src/utils/handleApiError.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "handleApiError": (()=>handleApiError)
});
function handleApiError(error, fallbackMessage) {
    if (typeof error === "object" && error !== null && "response" in error) {
        const err = error;
        const data = err.response?.data;
        if (data && typeof data === "object" && !Array.isArray(data)) {
            const errorData = data;
            if (Array.isArray(errorData.errors) && errorData.errors.length > 0) {
                throw new Error(errorData?.errors[0]?.msg || fallbackMessage);
            }
            if (typeof errorData.message === "string") {
                throw new Error(errorData.message);
            }
        }
        if (typeof data === "string") {
            throw new Error(data);
        }
    }
    console.error("Unhandled error structure:", error);
    throw new Error(fallbackMessage);
}
}}),
"[project]/src/services/auth.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "login": (()=>login),
    "logout": (()=>logout),
    "profile": (()=>profile),
    "register": (()=>register)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/handleApiError.ts [app-ssr] (ecmascript)");
;
;
const login = async (userDataLogin)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/auth/login", userDataLogin);
        return response.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Login Failed");
    }
};
const register = async (userDataRegist)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/auth/register", userDataRegist);
        return response.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Register Failed");
    }
};
const profile = async (token)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/auth/profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$handleApiError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error, "Get Profile Failed");
    }
};
const logout = ()=>{
    localStorage.removeItem("token");
};
}}),
"[project]/src/components/AuthPage.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/components/AuthPage.tsx'

Unexpected token `token`. Expected ... , *,  (, [, :, , ?, =, an identifier, public, protected, private, readonly, <.`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__cccb9315._.js.map