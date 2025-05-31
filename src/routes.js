const express = require('express');
const router = express.Router();

const userRoutes = require('./modules/user/user.route');
const transactionRoutes = require('./modules/transaction/transaction.route');
const categoryRoutes = require('./modules/category/category.route');
const monthlySummaryRoutes = require('./modules/monthlySummary/monthlySummary.route');
const authRoutes = require('./modules/auth/auth.route');
const NotFound = require('./errors/NotFoundError');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/category', categoryRoutes);
router.use('/transaction', transactionRoutes);
router.use('/monthly-summary', monthlySummaryRoutes);

router.use((req, res) => {
    throw new NotFound("Route Tidak Ditemukan!")
})

module.exports = router;