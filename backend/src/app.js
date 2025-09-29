// src/app.js
const express = require('express');
const app = express();

const { enableCORS, setSecurityHeaders } = require('./middlewares/security.middleware');
const errorHandler = require('./middlewares/errorHandler.middleware');
const routes = require('./routes');
require('./store/sequelize'); // inisialisasi DB (Sequelize)

// ---- production behind proxy (Render/Koyeb) ----
if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}

// ---- core middlewares ----
app.use(express.json());
app.use(enableCORS);              // CORS lebih dulu
// (opsional, jika kamu ingin handle OPTIONS eksplisit, gunakan pola aman Express 5):
// app.options('/:path(.*)', enableCORS);
app.use(setSecurityHeaders);      // header keamanan (helmet, dll.)

// ---- health check (pastikan DI ATAS router) ----
app.get('/api/v1/health', (_req, res) => {
  res.status(200).json({
    ok: true,
    env: process.env.NODE_ENV || 'development',
    uptime: process.uptime(),
  });
});

// ---- main router ----
app.use('/api/v1', routes);

// ---- error handlers (akhir) ----
app.use(errorHandler);            // handler custom milikmu
app.use((err, req, res, _next) => {
  const status = err.status || 500;
  res.status(status).json({
    success: false,
    message: err.message || 'Terjadi kesalahan pada server',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
});

module.exports = app;
