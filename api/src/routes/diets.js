const { Router } = require("express");
const dietsRouter = Router();

dietsRouter.get("/", (req, res) => {
 const diets = req.body 
 res.json(diets)
});

module.exports = dietsRouter;
