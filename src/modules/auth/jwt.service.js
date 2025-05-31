const jwt = require('jsonwebtoken');
const config = require('../../config/config');

class JwtService {
    sign(payload) {
        return jwt.sign(payload, config.jwt.secret, { expiresIn: "1d" });
    }

    verify(token) {
        return jwt.verify(token, config.jwt.secret)
    }
}

module.exports = new JwtService();