const express = require('express');
const router = express.Router();
const TransactionController = require('./transaction.controller');
const { createTransactionValidator, updateTransactionValidator, idParamValidator } = require('./transaction.validator');
const validateRequest = require('../../middlewares/validation.middleware');
const asyncErrorHandle = require('../../errors/asyncErrorHandler');
const authJWT = require('../../middlewares/auth.middleware');

router.use(authJWT);

router.get('/', 
    asyncErrorHandle(TransactionController.getAll.bind(TransactionController))
)

router.get('/monthly-summary', 
    asyncErrorHandle(TransactionController.getMonthlySummary.bind(TransactionController))
)
router.get('/monthly-chart', 
    asyncErrorHandle(TransactionController.getMonthlyChart.bind(TransactionController))
)
router.get('/today', 
    asyncErrorHandle(TransactionController.getTodayTransaction.bind(TransactionController))
)
router.get('/today-expense-stats', 
    asyncErrorHandle(TransactionController.getTodayExpense.bind(TransactionController))
)

router.get('/:id', 
    idParamValidator,
    validateRequest,
    asyncErrorHandle(TransactionController.getById.bind(TransactionController))
)

router.post('/', 
    createTransactionValidator,
    validateRequest,
    asyncErrorHandle(TransactionController.create.bind(TransactionController))
)

router.put('/:id', 
    idParamValidator,
    updateTransactionValidator,
    validateRequest,
    asyncErrorHandle(TransactionController.update.bind(TransactionController))
)

router.delete('/:id', 
    idParamValidator,
    validateRequest,
    asyncErrorHandle(TransactionController.delete.bind(TransactionController))
)

module.exports = router;