const { Router } = require("express");
const dietsRouter = Router();
const {Diets} = require('../db.js')

dietsRouter.get("/", async (req, res) => {
    try {
     const allDiets = await Diets.findAll();
     res.status(200).json(allDiets)
    
 } catch (error) {
    res.status(404).json({error: error.message});
 }
});

module.exports = dietsRouter;
