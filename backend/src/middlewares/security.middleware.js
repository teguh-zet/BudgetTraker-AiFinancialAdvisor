// middlewares/security.middleware.js
const cors = require('cors');
const helmet = require('helmet');

const isProd = process.env.NODE_ENV === 'production';

/**
 * Kumpulkan whitelist origin dari ENV:
 * - ALLOWED_ORIGINS= http://localhost:3000,https://myapp.vercel.app,*.vercel.app
 * - CORS_ORIGIN= https://single-origin.example.com  (opsional)
 */
const allowedOrigins = (() => {
  const list = (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);

  const single = (process.env.CORS_ORIGIN || '').trim();
  if (single && single !== '*') list.push(single);

  // unikkan
  return [...new Set(list)];
})();

/** Cek apakah origin cocok dengan whitelist (dukung wildcard "*.domain") */
function matchesAllowed(origin) {
  return allowedOrigins.some(rule => {
    if (rule === origin) return true;
    if (rule.startsWith('*.')) return origin.endsWith(rule.slice(1));
    return false;
  });
}

const enableCORS = cors({
  origin(origin, cb) {
    // Izinkan request tanpa Origin (Postman/cURL/Health check)
    if (!origin) return cb(null, true);

    // Cocok whitelist?
    if (matchesAllowed(origin)) return cb(null, true);

    // Di dev, kalau belum set whitelist, izinkan semuanya untuk kemudahan
    if (!isProd && allowedOrigins.length === 0) return cb(null, true);

    return cb(new Error('Not allowed by CORS'));
  },
  credentials: true, // penting bila pakai cookie / Authorization header
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204,
});

// Gunakan helmet utk header keamanan + tambah satu header yang kamu pakai
const setSecurityHeaders = [
  helmet({
    // Supaya load font/gambar dari domain lain tetap aman
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  }),
  (_req, res, next) => {
    res.setHeader('Referrer-Policy', 'no-referrer');
    next();
  },
];

module.exports = { enableCORS, setSecurityHeaders, allowedOrigins };
