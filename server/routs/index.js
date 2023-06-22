const express = require("express");
const router = express.Router();
const kpiRouter = require('./kpi')
const ProductRouter = require('./products')
const transactionRouter = require('./transaction')

router.use("/kpi",kpiRouter);
router.use('/product',ProductRouter);
router.use('/transaction',transactionRouter);

module.exports = router;