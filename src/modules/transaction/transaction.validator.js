const { body, param } = require('express-validator');

const createTransactionValidator = [
  body('type')
    .notEmpty().withMessage('Tipe transaksi wajib diisi')
    .isIn(['income', 'expense']).withMessage('Tipe transaksi harus "income" atau "expense"'),
  body('amount')
    .notEmpty().withMessage('Jumlah harus diisi')
    .isNumeric().withMessage('Jumlah harus berupa angka'),
  body('date')
    .notEmpty().withMessage('Tanggal wajib diisi')
    .isISO8601().toDate().withMessage('Format tanggal tidak valid'),
  body('note')
    .optional()
    .isString().withMessage('Catatan harus berupa teks'),
  body('category_id')
    .notEmpty().withMessage('Category ID wajib diisi')
    .isInt().withMessage('Category ID harus berupa angka'),
];

const updateTransactionValidator = [
  param('id')
    .isInt().withMessage('ID transaksi harus berupa angka'),
  body('type')
    .optional()
    .isIn(['income', 'expense']).withMessage('Tipe transaksi harus "income" atau "expense"'),
  body('amount')
    .optional()
    .isNumeric().withMessage('Jumlah harus berupa angka'),
  body('date')
    .optional()
    .isISO8601().toDate().withMessage('Format tanggal tidak valid'),
  body('note')
    .optional()
    .isString().withMessage('Catatan harus berupa teks'),
  body('category_id')
    .optional()
    .isInt().withMessage('Category ID harus berupa angka'),
];


const idParamValidator = [
  param('id')
    .isInt().withMessage('ID transaksi harus berupa angka'),
];

module.exports = {
  createTransactionValidator,
  updateTransactionValidator,
  idParamValidator,
};
