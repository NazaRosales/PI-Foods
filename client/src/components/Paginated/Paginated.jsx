import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "../Cards/RecipeCard.jsx";
import { setCurrentPage } from "../../redux/actions";
import "./paginated.css";

export default function Paginated() {
  const filteredRecipes = useSelector((state) => state.filteredRecipes);
  const currentPage = useSelector((state) => state.currentPage);

  const numRecipes = 9; // recetas por página

  const indexOfLastRecipe = currentPage * numRecipes;
  const indexOfFirstRecipe = indexOfLastRecipe - numRecipes;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className="paginated-container">
      <div className="cards">
        {filteredRecipes.length > 0 ? (
          currentRecipes.map((recipe) => (
            <RecipeCard
              key={recipe?.id}
              id={recipe?.id}
              image={recipe?.image}
              title={recipe?.title}
              summary={recipe?.summary}
              diet={recipe?.diet}
            />
          ))
        ) : (
          <h1 className="loading">Loading...</h1>
        )}
      </div>

      <div className="pages">
        {Array.from(
          { length: Math.ceil(filteredRecipes.length / numRecipes) },
          (_, index) => (
            <button
              className={index + 1 === currentPage ? "pageSelected" : null}
              key={index}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
