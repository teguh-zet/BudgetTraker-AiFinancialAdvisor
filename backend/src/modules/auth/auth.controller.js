const AuthService = require('./auth.service');

class AuthController {
    async register(req, res, next) {
        try {
            const data = req.body;
            const result = await AuthService.register(data);
            res.status(201).json({
                success: true,
                message: 'Register berhasil',
                data: result
            });
        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const data = req.body;
            const result = await AuthService.login(data);
            res.status(200).json({
                success: true,
                message: 'Login berhasil',
                data: result
            });
        } catch (error) {
            next(error)
        }
    }

    async profile(req, res, next) {
        try {
            const userId = req.userId;
            const user = await AuthService.profile(userId);

            res.status(200).json({
                success: true,
                message: 'Profile berhasil di ambil',
                data: user
            });
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AuthController();