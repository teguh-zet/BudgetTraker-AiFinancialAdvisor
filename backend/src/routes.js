// src/routes.js
const express = require('express');
const router = express.Router();

const userRoutes = require('./modules/user/user.route');
const transactionRoutes = require('./modules/transaction/transaction.route');
const categoryRoutes = require('./modules/category/category.route');
const monthlySummaryRoutes = require('./modules/monthlySummary/monthlySummary.route');
const authRoutes = require('./modules/auth/auth.route');
const NotFound = require('./errors/NotFoundError');


// --- END TEST ---

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/category', categoryRoutes);
router.use('/transaction', transactionRoutes);
router.use('/monthly-summary', monthlySummaryRoutes);

const { sequelize } = require('../models'); // dari src/ ke root/models

router.get('/db-ping', async (_req, res) => {
  try {
    await sequelize.query('SELECT 1');
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

router.use((req, res) => { throw new NotFound('Route Tidak Ditemukan!'); });

module.exports = router;
