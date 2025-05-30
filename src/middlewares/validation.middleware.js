const { validationResult } = require('express-validator');

function validateRequest(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validasi input gagal',
      errors: errors.array().map(e => ({ param: e.param, msg: e.msg })),
    });
  }
  next();
}

module.exports = validateRequest;
