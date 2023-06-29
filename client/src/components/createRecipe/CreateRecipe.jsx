import "./Module.CreateRecipe.css";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe } from "../../redux/actions";

export default function CreateRecipe() {
  const dietTypes = useSelector((state) => state.diets);
  const dispatch = useDispatch();
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
    } else {
      arrDiets = arrDiets.filter((diet) => diet !== checked);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:3001/recipes", recipe);
      dispatch(createRecipe(result.data));
      alert("Recipe created successfully!✅");
      setRecipe({
        title: "",
        image: "",
        summary: "",
        healthScore: 0,
        steps: "",
        diet: [],
      });
    } catch (error) {
      alert(
        "The recipe could not be created due to an error in the information ❌"
      );
    }
  };

  return (
    <>
      <div className="container">
        <form className="allInputs" onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="title" className="input-label">
              Recipe Name:
            </label>
            <input
              className="recipeInput"
              onChange={handleChange}
              type="text"
              name="title"
              id="title"
              value={recipe.title}
              placeholder="Chiles stuffed with huitlacoche..."
            />
            {errors.title && <p className="errors"> {errors.title} </p>}
          </div>

          <div className="inputs">
            <label htmlFor="image" className="input-label">
              URL image:
            </label>
            <input
              className="recipeInput"
              onChange={handleChange}
              type="url"
              name="image"
              id="image"
              value={recipe.image}
              placeholder="https://imageurl.com.ar/"
            />
          </div>

          <div className="inputs">
            <label htmlFor="summary" className="input-label">
              Summary:
            </label>
            <input
              className="recipeInput"
              onChange={handleChange}
              type="text"
              name="summary"
              id="summary"
              value={recipe.summary}
              placeholder="Lightly blend the cream and cheese, serve in a pan and sprinkle with chopped cilantro. reserve"
            />
            {errors.summary && <p className="errors"> {errors.summary} </p>}
          </div>

          <div className="inputs">
            <label htmlFor="healthScore" className="input-label">
              Health Score:
            </label>
            <input
              className="recipeInput"
              name="healthScore"
              id="healthScore"
              value={recipe.healthScore}
              onChange={handleChange}
              type="number"
              step={0.1}
              min={0}
              max={100}
              placeholder="80.5"
            />
            {errors.healthScore && (
              <p className="errors"> {errors.healthScore} </p>
            )}
          </div>

          <div className="inputs">
            <label htmlFor="steps" className="input-label">
              Steps:
            </label>
            <input
              className="recipeInput"
              name="steps"
              id="steps"
              value={recipe.steps}
              onChange={handleChange}
              type="text"
              placeholder="Lightly blend the cream and cheese, serve in a pan and sprinkle with chopped cilantro. reserve"
            />
            {errors.steps && <p className="errors"> {errors.steps} </p>}
          </div>

          <div className="inputs">
            <label className="input-label">Diets:</label>
            <div className="divDiets">
              {dietTypes?.map((diet, index) => (
                <div className="diet" key={index}>
                  <label htmlFor={index + "diet"}> {diet} </label>
                  <input
                    id={index + "diet"}
                    onChange={handleDiets}
                    type="checkbox"
                    value={diet}
                    name={diet}
                  />
                </div>
              ))}
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
