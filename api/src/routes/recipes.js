const express = require("express");
const recipesRouter = express.Router();
const getRecipeById = require("../controllers/recipeById.js");
const getRecipeByName = require("../controllers/recipeByName.js");
const isUUID = require("../controllers/isUUID.js");
const postRecipe = require("../controllers/postRecipe.js");


recipesRouter.get("/name", async (req, res) => {
  const { name } = req.query;
  try {
    const result = await getRecipeByName(req, res, name);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

recipesRouter.get("/:idRecipe", async (req, res) => {
  const { idRecipe } = req.params;

  try {
    let result;
    if (isUUID(idRecipe)) result = await getRecipeById(idRecipe);
    else result = await getRecipeById(parseInt(idRecipe));
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

recipesRouter.post("/", async (req, res) => {
  //CREANDO RECETA EN BD
  const { title, summary, healthScore, steps, image, diet } = req.body;
  console.log(healthScore)
  try {
    const result = await postRecipe(
      title,
      image,
      summary,
      healthScore,
      steps,
      diet
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = recipesRouter;
