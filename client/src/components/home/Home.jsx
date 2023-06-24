import "./module.Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import RecipeCard from "./Cards/RecipeCard.jsx";
import sendRequestName from "./controllers/sendRequestName.js";

export default function Home() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearch("");
    const response = await sendRequestName(search)
    if(response.status === 500){
      alert("RECIPE DO NOT EXIST")
    } else{
      console.log(response)
      setRecipes(response); //by query
    }
  };


  return (
    <>
      <div className="navItem">
        <Link to="/">
          <button className="btn">Exit</button>
        </Link>
        <Link to="/create-recipe">
          <button className="btn">Create Recipe</button>
        </Link>
      </div>
      <form type="submit" className="search" onSubmit={handleSubmit}>
        <div className="navBar">
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
            <input
              type="text"
              placeholder="Search: Potato hash with greens..."
              value={search}
              onChange={handleSearch}
            />
            <button>Search Recipe</button>
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
      </form>
      <section className="cards">
        {recipes?.length > 0 &&
          recipes?.map((recipe) => {
            return (
              <RecipeCard
                key={recipe?.id}
                id={recipe?.id}
                image={recipe?.image}
                title={recipe?.title}
                diet={recipe?.diet}
              />
            );
          })}
      </section>
    </>
  );
}
