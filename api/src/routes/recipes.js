const { Router } = require("express");
const recipesRouter = Router();

recipesRouter.get("/name", (req, res) => {
  const { name } = req.query;
  res.send(`Get recipe by name: ${name}`);
});

recipesRouter.get("/:idRecipe", (req, res) => {
  const { idRecipe } = req.params;
  res.send(`Get recipe by id: ${idRecipe}`);
});

recipesRouter.post("/", (req, res) => {
  res.send("Creating recipe on database");
});

module.exports = recipesRouter;
