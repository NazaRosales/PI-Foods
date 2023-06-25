const { Router } = require("express");
const homeRouter = Router();
const { Diets } = require("../db.js");
const getDietStart = require("../controllers/getDietStart.js");
const getDietsHome = require("../controllers/getDietsHome");

homeRouter.get("/", async (req, res) => {
  try {
    const firstDiets = getDietsHome();
    let diets = await Diets.findAll();
    if (!diets.length) {
      diets = await getDietStart(firstDiets);
    } else {
      const result = diets.map((diet) => diet.name);
      diets = [...result];
    }
    res.status(200).json({ diets, firstDiets });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = homeRouter