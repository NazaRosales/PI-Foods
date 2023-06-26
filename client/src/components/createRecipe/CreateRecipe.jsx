import "./Module.CreateRecipe.css";
import { useState } from "react";
import createNewRecipe from "./createNewRecipe.js";
import { useSelector } from "react-redux";

export default function CreateRecipe() {
  const dietTypes = useSelector((state) => state.diets);
  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    summary: "",
    healthScore: 0,
    steps: "",
    diet: [],
  });
  const [errors, setErrors] = useState({
    title: "",
    summary: "",
    healthScore: "",
    steps: "",
  });

  const validation = (recipe) => {
    let errors = {};

    const titleRegex = /^[^0-9]{1,100}$/;
    titleRegex.test(recipe.title)
      ? (errors = { ...errors, title: "" })
      : (errors = { ...errors, title: "There are errors in title." });

    recipe.summary.length > 20
      ? (errors = { ...errors, summary: "" })
      : (errors = {
          ...errors,
          summary: "Summary must be at least 20 characters",
        });

    const isFloat = /^[0-9]+(\.[0-9]{1,1})?$|^10(\.[0]{1,1})?$/;
    isFloat.test(recipe.healthScore)
      ? (errors = { ...errors, healthScore: "" })
      : (errors = {
          ...errors,
          healthScore: "Invalid value for health score.",
        });

    recipe.steps.length
      ? (errors = { ...errors, steps: "" })
      : (errors = { ...errors, steps: "There are errors in steps." });
    return errors;
  };

  const handleDiets = (event) => {
    const checked = event.target.value;
    let arrDiets = [...recipe.diet];
    if (event.target.checked) {
      arrDiets.push(checked);
      console.log(recipe)
    } else {
      arrDiets = arrDiets.filter((diet) => diet !== checked);
      console.log(recipe)
    }
    setRecipe({ ...recipe, diet: arrDiets });
  };

  const handleChange = (evento) => {
    setRecipe({
      ...recipe,
      [evento.target.name]: evento.target.value,
    });
    setErrors(
      validation({
        ...recipe,
        [evento.target.name]: evento.target.value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //all keys on errors have falsy value ("")
    if (Object.values(errors).every((value) => !Boolean(value))) {
      createNewRecipe(recipe);
      setRecipe({
        title: "",
        image: "",
        summary: "",
        healthScore: 0,
        steps: "",
        diet: [],
      });
      alert("Recipe created successfully");
    }
  };
  return (
    <>
      <div className="container">
        <form className="allInputs" onSubmit={handleSubmit}>
          <div className="inputs">
            <label className="input-label">Recipe Name:</label>
            <input
              className="recipeInput"
              onChange={handleChange}
              type="text"
              name="title"
              value={recipe.title}
              placeholder="Chiles stuffed with huitlacoche..."
            />
            {errors.title && <p> {errors.title} </p>}
          </div>

          <div className="inputs">
            <label className="input-label">URL image:</label>
            <input
              className="recipeInput"
              onChange={handleChange}
              type="url"
              name="image"
              value={recipe.image}
              placeholder="https://imageurl.com.ar/"
            />
          </div>
          <div className="inputs">
            <label className="input-label">Summary</label>
            <input
              className="recipeInput"
              onChange={handleChange}
              type="text"
              name="summary"
              value={recipe.summary}
              placeholder="
            Lightly blend the cream and cheese, serve in a pan and sprinkle with chopped cilantro. reserve"
            />
            {errors.summary && <p> {errors.summary} </p>}
          </div>

          <div className="inputs">
            <label className="input-label">Health Score:</label>
            <input
              className="recipeInput"
              name="healthScore"
              value={recipe.healthScore}
              onChange={handleChange}
              type="number"
              step={0.1}
              min={0}
              max={100}
              placeholder="80.5"
            />
            {errors.healthScore && <p> {errors.healthScore} </p>}
          </div>

          <div className="inputs">
            <label className="input-label">Steps:</label>
            <input
              className="recipeInput"
              name="steps"
              value={recipe.steps}
              onChange={handleChange}
              type="text"
              placeholder="
            Lightly blend the cream and cheese, serve in a pan and sprinkle with chopped cilantro. reserve"
            />
            {errors.steps && <p> {errors.steps} </p>}
          </div>
          <div className="inputs">
            <label className="input-label">Diets:</label>

            <div className="divDiets">
              {dietTypes?.map((diet) => {
                return (
                  <div className="diet">
                    <label> {diet} </label>
                    <input
                      onChange={handleDiets}
                      type="checkbox"
                      value={diet}
                      name={diet}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="btnContainer">
            <button className="btnCreate">Create</button>
          </div>
        </form>
      </div>
    </>
  );
}
