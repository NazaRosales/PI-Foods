import "./Module.CreateRecipe.css";
import { useState } from "react";
import createRecipe from "./controllers/createRecipe.js";
import { Link } from "react-router-dom";
export default function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    title:"",
    image:"",
    summary:"",
    score: 0,
    step: "",
    diet: ""
  });

  const handleChange = (evento) => {
    setRecipe({
      ...recipe,
      [evento.target.name]: evento.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipe);
    setRecipe({
      title:"",
      image:"",
      summary:"",
      score: 0,
      step: "",
      diet: "",
    })
  };
  return (
    <>
      <Link to="/home">
        <button>Back Home</button>
      </Link>
      <div className="container">
        <form className="allInputs" onSubmit={handleSubmit}>
          <div className="inputs">
            <label>Recipe Name:</label>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              value={recipe.title}
              placeholder="Chiles stuffed with huitlacoche..."
            />
          </div>

          <div className="inputs">
            <label>URL image:</label>
            <input
              onChange={handleChange}
              type="url"
              name="image"
              value={recipe.image}
              placeholder="https://imageurl.com.ar/"
            />
          </div>
          <div className="inputs">
            <label>Summary</label>
            <input
              onChange={handleChange}
              type="text"
              name="summary"
              value={recipe.summary}
              placeholder="
            Lightly blend the cream and cheese, serve in a pan and sprinkle with chopped cilantro. reserve"
            />
          </div>

          <div className="inputs">
            <label>Health Score:</label>
            <input
              name="score"
              value={recipe.score}
              onChange={handleChange}
              type="number"
              step={0.1}
              min={0}
              max={10}
              placeholder="7.5"
            />
          </div>

          <div className="inputs">
            <label>Steps:</label>
            <input
              name="step"
              value={recipe.step}
              onChange={handleChange}
              type="text"
              placeholder="
            Lightly blend the cream and cheese, serve in a pan and sprinkle with chopped cilantro. reserve"
            />
          </div>
          <div className="inputs">
            <label>Diets:</label>
            <textarea
              onChange={handleChange}
              type="text"
              name="diet"
              value={recipe.diet}
              placeholder="Glutten free, vegan, etc..."
            />
          </div>

          <button className="btnCreate">Create</button>
        </form>
      </div>
    </>
  );
}
