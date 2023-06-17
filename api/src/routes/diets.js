const { Router } = require("express");
const dietsRouter = Router();

dietsRouter.get("/", (req, res) => {
  res.send("hiciste un get a /diets");
});

module.exports = dietsRouter;
