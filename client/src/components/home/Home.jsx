import "./module.Home.css";
import RecipeCard from "../Cards/RecipeCard.jsx";
import { useState, useEffect } from "react";

export default function Home() {
  /* const [search, setSearch] = useState("");
 const handleSearch = (event) => {
   setSearch(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearch("");
    const response = await sendRequestName(search)
    if(response?.status === 500){
      alert("RECIPE DO NOT EXIST")
    } else{
      console.log(response)
      setRecipes(response); //by query
    }
  };
  */

  const API_KEY = "a807fc1ed63b4b60a5ee1c0f15d194ee";
  const URL = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=${API_KEY}&addRecipeInformation=true&number=25`;
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then(data => setRecipes(data.results))
      
  }, [URL]);
  console.log(recipes[2])

  return (
    <div className="cards">
      {recipes?.length > 0 &&
        recipes?.map((recipe) => {
          return (
            <RecipeCard
              key={recipe?.id}
              id={recipe?.id}
              image={recipe?.image}
              title={recipe?.title}
              diet={recipe?.diets}
            />
          );
        })}
    </div>
  );
}
