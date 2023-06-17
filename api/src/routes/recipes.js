const { Router } = require("express");
const recipesRouter = Router();
const { Recipe } = require("../db.js");
recipesRouter.get("/name", (req, res) => {
  const { name } = req.query;
  res.send(`Get recipe by name: ${name}`);
});

recipesRouter.get("/:idRecipe", (req, res) => {
  const { idRecipe } = req.params;
  res.send(`Get recipe by id: ${idRecipe}`);
});

recipesRouter.post("/", async (req, res) => {
  //CREANDO RECETA EN BD
  const { name, image, summary, healthScore, steps } = req.body;
  try {
    const recipe = await Recipe.create({
      name,
      image,
      summary,
      healthScore,
      steps,
    });
    res.status(200).json({ message: `Receta creada exitosamente...` });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = recipesRouter;
