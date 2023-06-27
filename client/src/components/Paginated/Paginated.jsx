import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "../Cards/RecipeCard.jsx";
import { setCurrentPage } from "../../redux/actions";
import './paginated.css'

export default function Paginated() {
  const recipes = useSelector((state) => state.recipes);
  const filteredRecipes = useSelector((state) => state.filteredRecipes);
  const currentPage = useSelector((state) => state.currentPage);

  const numRecipes = 9; //recipes per page
  const showRecipes = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  const indexOfLastRecipe = currentPage * numRecipes;
  const indexOfFirstRecipe = indexOfLastRecipe - numRecipes;
  const currentRecipes = showRecipes?.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };
  return (
    <div className="paginated-container">
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
    </div>
  );
}
