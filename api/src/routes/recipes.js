const express = require("express");
const { Recipe } = require("../db.js");
const { Op } = require("sequelize");
const recipesRouter = express.Router();
const getRecipeById = require("../controllers/recipeById.js");
const getRecipeByName = require("../controllers/recipeByName.js")
const isUUID = require("../controllers/isUUID.js");
const postRecipe = require('../controllers/postRecipe.js')

recipesRouter.get("/name", async (req, res) => {
  const { name } = req.query;
  try {
    const recipes = await Recipe.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    recipes.length > 0
      ? res.status(200).json(recipes)
      : res.status(400).json({ message: "Recipe not found" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

recipesRouter.get("/:idRecipe", async (req, res) => {
  const { idRecipe } = req.params;

  try {
    let result;
    if(isUUID(idRecipe)) result = await getRecipeById(idRecipe);
    else result = await getRecipeById(parseInt(idRecipe))
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }

});

recipesRouter.post("/", async (req, res) => {
  //CREANDO RECETA EN BD
  const {title, summary, healthScore, step, score, image, diet} = req.body;

  try {
    const result = await postRecipe(title, summary, healthScore, step, score, image, diet)
    res.status(201).json(result)

} catch (error) {
    res.status(400).json({error: error.message})
}
});

module.exports = recipesRouter;
