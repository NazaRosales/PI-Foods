const { Router } = require("express");
const homeRouter = Router();
const { Diets } = require("../db.js");
const getDietStart = require("../controllers/getDietStart.js");
const getHome = require("../controllers/getHome.js");

homeRouter.get("/", async (req, res) => {
  try {
    const recipes = await getHome();
    let diets = await Diets.findAll();
    if (!diets.length) {
      diets = await getDietStart(recipes);
    } else {
      const result = diets.map((diet) => diet.name);
      diets = [...result];
    }
    res.status(200).json({ diets, recipes });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = homeRouter