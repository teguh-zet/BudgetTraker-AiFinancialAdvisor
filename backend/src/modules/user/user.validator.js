const { body, param } = require('express-validator');

const createUserValidator = [
  body('name')
    .notEmpty().withMessage('Nama wajib diisi')
    .isString().withMessage('Nama harus berupa teks')
    .isLength({ max: 50 }).withMessage('Nama maksimal 50 karakter'),
  body('email')
    .notEmpty().withMessage('Email wajib diisi')
    .isEmail().withMessage('Format email tidak valid')
    .isLength({ max: 50 }).withMessage('Email maksimal 50 karakter'),
  body('number')
    .optional()
    .isMobilePhone('id-ID').withMessage('Nomor telepon tidak valid'),
  body('password')
    .notEmpty().withMessage('Password wajib diisi')
    .isLength({ min: 6 }).withMessage('Password minimal 6 karakter'),
];

const updateUserValidator = [
  param('id')
    .isInt().withMessage('ID harus berupa angka'),

  body('name')
    .notEmpty().withMessage('Nama tidak boleh kosong jika diisi')
    .isString().withMessage('Nama harus berupa teks')
    .isLength({ max: 50 }).withMessage('Nama maksimal 50 karakter'),

  body('email')
    .notEmpty().withMessage('Email tidak boleh kosong jika diisi')
    .isEmail().withMessage('Format email tidak valid')
    .isLength({ max: 50 }).withMessage('Email maksimal 50 karakter'),

  body('number')
    .optional()
    .isMobilePhone('id-ID').withMessage('Nomor telepon tidak valid'),

  body('password')
    .optional()
    .isLength({ min: 6 }).withMessage('Password minimal 6 karakter'),
];


const idParamValidator = [
  param('id')
    .isInt().withMessage('ID harus berupa angka'),
];

module.exports = {
  createUserValidator,
  updateUserValidator,
  idParamValidator,
};
