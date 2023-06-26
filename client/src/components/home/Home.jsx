import "./module.Home.css";
import RecipeCard from "../Cards/RecipeCard.jsx";
import { useEffect } from "react";
import { getHomeRecipes } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!recipes?.length) {
        await dispatch(getHomeRecipes());
      }
    };
    fetchRecipes();
  }, [dispatch, recipes]);
  return (
    <div className="cards">
      {
        recipes.length > 0 &&
        recipes?.map((recipe) => {
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
        })
      } 
    </div>
  );
}
