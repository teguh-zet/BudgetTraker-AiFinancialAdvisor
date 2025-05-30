const { body, param } = require('express-validator');

const createMonthlySummaryValidator = [
  body('month')
    .notEmpty().withMessage('Bulan wajib diisi')
    .isString().withMessage('Bulan harus berupa teks')
    .isLength({ max: 25 }).withMessage('Bulan maksimal 25 karakter'),
  body('year')
    .notEmpty().withMessage('Tahun wajib diisi')
    .isString().withMessage('Tahun harus berupa teks')
    .isLength({ max: 4 }).withMessage('Tahun maksimal 4 karakter'),
  body('total_income')
    .notEmpty().withMessage('Total pemasukan wajib diisi')
    .isNumeric().withMessage('Total pemasukan harus berupa angka'),
  body('total_expense')
    .notEmpty().withMessage('Total pengeluaran wajib diisi')
    .isNumeric().withMessage('Total pengeluaran harus berupa angka'),
  body('balance')
    .notEmpty().withMessage('Balance wajib diisi')
    .isNumeric().withMessage('Balance harus berupa angka'),
  body('ai_summary')
    .optional()
    .isString().withMessage('AI Summary harus berupa teks'),
  body('ai_recomendation')
    .optional()
    .isString().withMessage('AI Recommendation harus berupa teks'),
];

const updateMonthlySummaryValidator = [
  param('id')
    .isInt().withMessage('ID harus berupa angka'),
  body('month')
    .optional()
    .notEmpty().withMessage('Bulan tidak boleh kosong jika diisi')
    .isString().withMessage('Bulan harus berupa teks')
    .isLength({ max: 25 }).withMessage('Bulan maksimal 25 karakter'),
  body('year')
    .optional()
    .notEmpty().withMessage('Tahun tidak boleh kosong jika diisi')
    .isString().withMessage('Tahun harus berupa teks')
    .isLength({ max: 4 }).withMessage('Tahun maksimal 4 karakter'),
  body('total_income')
    .optional()
    .isNumeric().withMessage('Total pemasukan harus berupa angka'),
  body('total_expense')
    .optional()
    .isNumeric().withMessage('Total pengeluaran harus berupa angka'),
  body('balance')
    .optional()
    .isNumeric().withMessage('Balance harus berupa angka'),
  body('ai_summary')
    .optional()
    .isString().withMessage('AI Summary harus berupa teks'),
  body('ai_recomendation')
    .optional()
    .isString().withMessage('AI Recommendation harus berupa teks'),
];

const idParamValidator = [
  param('id')
    .isInt().withMessage('ID harus berupa angka'),
];

module.exports = {
  createMonthlySummaryValidator,
  updateMonthlySummaryValidator,
  idParamValidator,
};
