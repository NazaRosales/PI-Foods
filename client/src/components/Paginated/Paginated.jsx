import { useSelector } from "react-redux";
import { useState } from "react";
import RecipeCard from "../Cards/RecipeCard.jsx";
import './paginated.css'

export default function Paginated() {
  const recipes = useSelector((state) => state.recipes);
  const filteredRecipes = useSelector((state) => state.filteredRecipes);

  const numRecipes = 9; //recipes per page
  const [currentPage, setCurrentPage] = useState(1);
  const showRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  const indexOfLastRecipe = currentPage * numRecipes; //start with  1 * 9
  const indexOfFirstRecipe = indexOfLastRecipe - numRecipes; // start with  9 - 9 = [0]
  const currentRecipes = showRecipes?.slice(indexOfFirstRecipe, indexOfLastRecipe); // [ 0 ... 8]

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="cards">
        {recipes?.length > 0 &&
          currentRecipes?.map((recipe) => {
            return (
              <RecipeCard
                key={recipe?.id}
                id={recipe?.id}
                image={recipe?.image}
                title={recipe?.title}
                summary={recipe?.summary}
                diet={recipe?.diet}
              />
            );
          })}
      </div>

      <div className="pages">
        {Array.from(
          { length: Math.ceil(showRecipes?.length / numRecipes) },
          (_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </>
  );
}
