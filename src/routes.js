const express = require('express');
const router = express.Router();

const userRoutes = require('./modules/user/user.route');
const authRoutes = require('./modules/auth/auth.route');
const NotFound = require('./errors/NotFoundError');

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

router.use((req, res) => {
    throw new NotFound("Route Tidak Ditemukan!")
})

module.exports = router;