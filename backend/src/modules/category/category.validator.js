const { body, param } = require('express-validator');

const createCategoryValidator = [
  body('name')
    .notEmpty().withMessage('Nama kategori wajib diisi')
    .isString().withMessage('Nama kategori harus berupa string'),
  body('description')
    .optional()
    .isString().withMessage('Deskripsi harus berupa string'),
];

const updateCategoryValidator = [
  param('id')
    .isInt().withMessage('ID kategori harus berupa angka'),
  body('name')
    .optional()
    .notEmpty().withMessage('Nama kategori tidak boleh kosong jika diisi')
    .isString().withMessage('Nama kategori harus berupa string'),
  body('description')
    .optional()
    .isString().withMessage('Deskripsi harus berupa string'),
];

const categoryIdParamValidator = [
  param('id')
    .isInt().withMessage('ID kategori harus berupa angka'),
];

module.exports = {
  createCategoryValidator,
  updateCategoryValidator,
  categoryIdParamValidator,
};
