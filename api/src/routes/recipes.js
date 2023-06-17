const express = require("express");
const { Recipe } = require("../db.js");
const { Op } = require("sequelize");
const recipesRouter = express.Router();

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
    const recipe = await Recipe.findByPk(idRecipe);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

recipesRouter.post("/", async (req, res) => {
  //CREANDO RECETA EN BD
  const { name, image, summary, healthScore, steps, diets } = req.body;
  try {
    const recipe = await Recipe.create({
      name,
      image,
      summary,
      healthScore,
      steps,
    });

    res.status(200).json({recipe});

  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = recipesRouter;
