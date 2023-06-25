import "./Module.CreateRecipe.css";
import { useState } from "react";
import createNewRecipe from "./createNewRecipe.js";
export default function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    summary: "",
    healthScore: 0,
    steps: "",
    diet: "",
  }); 

  const handleChange = (evento) => {
    setRecipe({
      ...recipe,
      [evento.target.name]: evento.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createNewRecipe(recipe);
    setRecipe({
      title: "",
      image: "",
      summary: "",
      healthScore: 0,
      steps: "",
      diet: "",
    });
  };
  return (
    <>
      <div className="container">
        <form className="allInputs" onSubmit={handleSubmit}>
          <div className="inputs">
            <label className = "input-label">Recipe Name:</label>
            <input
               className = "text-input"
              onChange={handleChange}
              type="text"
              name="title"
              value={recipe.title}
              placeholder="Chiles stuffed with huitlacoche..."
            />
          </div>

          <div className="inputs">
            <label className = "input-label">URL image:</label>
            <input className = "text-input"
              onChange={handleChange}
              type="url"
              name="image"
              value={recipe.image}
              placeholder="https://imageurl.com.ar/"
            />
          </div>
          <div className="inputs">
            <label className = "input-label">Summary</label>
            <input className = "text-input"
              onChange={handleChange}
              type="text"
              name="summary"
              value={recipe.summary}
              placeholder="
            Lightly blend the cream and cheese, serve in a pan and sprinkle with chopped cilantro. reserve"
            />
          </div>

          <div className="inputs">
            <label className = "input-label">Health Score:</label>
            <input
            className="number-input"
              name="healthScore"
              value={recipe.healthScore}
              onChange={handleChange}
              type="number"
              step={1}
              min={0}
              max={100}
              placeholder="7.5"
            />
          </div>

          <div className="inputs">
            <label className = "input-label">Steps:</label>
            <input className = "text-input"
              name="steps"
              value={recipe.steps}
              onChange={handleChange}
              type="text"
              placeholder="
            Lightly blend the cream and cheese, serve in a pan and sprinkle with chopped cilantro. reserve"
            />
          </div>
          <div className="inputs">
            <label className = "input-label">Diets:</label>
            <textarea className = "textarea-input"
              onChange={handleChange}
              type="text"
              name="diet"
              value={recipe.diet}
              placeholder="Glutten free, vegan, etc..."
            />
          </div>
          <div className="btnContainer">
            <button className="btnCreate">Create</button>
          </div>
        </form>
      </div>
    </>
  );
}
