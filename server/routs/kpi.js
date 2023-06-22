const express = require("express");
const KPI = require("../model/KpisModel");

const router = express.Router();

router.get("/kpis",async(req,res)=>{
    try {
        const kpi = await KPI.find();
        res.status(200).json(kpi);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
})

module.exports = router;