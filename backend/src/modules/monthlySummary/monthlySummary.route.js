const express = require('express');
const router = express.Router();
const MonthlySummaryController = require('./monthlySummary.controller');

const { idParamValidator, createMonthlySummaryValidator, updateMonthlySummaryValidator } = require('./monthlySummary.validator');
const validateRequest = require('../../middlewares/validation.middleware');
const authJWT = require('../../middlewares/auth.middleware');
const asyncErrorHandler = require('../../errors/asyncErrorHandler');

router.use(authJWT);

router.get('/',
    asyncErrorHandler(MonthlySummaryController.getAll.bind(MonthlySummaryController))
)

router.post('/generate',
    asyncErrorHandler(MonthlySummaryController.generate.bind(MonthlySummaryController))
)

router.get('/:id',
    idParamValidator,
    validateRequest,
    asyncErrorHandler(MonthlySummaryController.getById.bind(MonthlySummaryController))
)

router.post('/',
    createMonthlySummaryValidator,
    validateRequest,
    asyncErrorHandler(MonthlySummaryController.create.bind(MonthlySummaryController))
)

router.put('/:id',
    idParamValidator,
    updateMonthlySummaryValidator,
    validateRequest,
    asyncErrorHandler(MonthlySummaryController.update.bind(MonthlySummaryController))
)

router.delete('/:id',
    idParamValidator,
    validateRequest,
    asyncErrorHandler(MonthlySummaryController.delete.bind(MonthlySummaryController))
)

module.exports = router;