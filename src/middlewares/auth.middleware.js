const JwtService = require('../modules/auth/jwt.service');
const UnauthorizedError = require('../errors/UnauthorizedError');

function authJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthorizedError("Token Tidak Di temukan!");
    }
    // 0 [1]
    // Bearer {token}

    const token = authHeader.split(' ')[1]

    // {token}

    try {
        const decoded = JwtService.verify(token);
        req.user = decoded;
        req.userId = decoded.id;
        next();
    } catch (error) {
        throw new UnauthorizedError("Token ini sudah tidak valid atau kadaluarsa");
    }
}

module.exports = authJWT;