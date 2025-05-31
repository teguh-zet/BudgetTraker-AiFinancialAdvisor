const express = require('express');
const router = express.Router();

const userRoutes = require('./modules/user/user.route');
const transactionRoutes = require('./modules/transaction/transaction.route');
const authRoutes = require('./modules/auth/auth.route');
const NotFound = require('./errors/NotFoundError');

router.use('/users', userRoutes);
router.use('/transaction', transactionRoutes);
router.use('/auth', authRoutes);

router.use((req, res) => {
    throw new NotFound("Route Tidak Ditemukan!")
})

module.exports = router;