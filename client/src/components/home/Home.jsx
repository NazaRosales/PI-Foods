import { Link } from "react-router-dom";
import image from "../../img/background-landing.png";
import "./module.Home.css";
import { useState } from "react";
import RecipeCard from "./RecipeCard";
const sendRequestName = require("./controllers/sendRequestName.js");

export default function Home() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearch("");
    setRecipes(await sendRequestName(search)); //by query
  };

  return (
    <>
    <img className = "backImage" src={image} alt="Imagen de la landing page de comida" />
      <div className="navBar">
        <div className="navItem">
          <Link to="/">
            <button className="btn">Home</button>
          </Link>
          <Link to="/create-recipe">
            <button className="btn">Create Recipe</button>
          </Link>
        </div>

        <div className="navItem">
          <select name="filet">
            <optgroup label="Order by:">
              <option value="default">Default</option>
              <option value="a-z">A-Z</option>
              <option value="healtScore">Health score</option>
            </optgroup>
          </select>
        </div>

        <div className="navItem">
          <form type="submit" className="search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search: Potato hash with greens..."
              value={search}
              onChange={handleSearch}
            />
            <button>Search Recipe</button>
          </form>
        </div>

        <div className="navItem">
          <select name="typeOfDiet">
            <optgroup label="Diet">
              <option value="None">None</option>
              <option value="Vegan">Vegan</option>
              <option value="Sugar Free">Sugar free</option>
            </optgroup>
          </select>
        </div>

        <div className="navItem">
          <select name="origin">
            <optgroup label="Origin">
              <option value="Vegan">Data Base</option>
              <option value="Sugar Free">API</option>
            </optgroup>
          </select>
        </div>
      </div>
      <section>
        {
        recipes?.length > 0 && recipes?.map((recipe) => {
          return <RecipeCard 
                key = {recipe?.id} 
                id = {recipe?.id} 
                image={recipe?.image} 
                title={recipe?.title} 
                diet={recipe?.diet} 
                />;
        })
        }
      </section>
    </>
  );
}
