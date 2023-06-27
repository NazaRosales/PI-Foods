import "./module.Home.css";
import { useEffect } from "react";
import { getHomeRecipes } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Paginated from "../Paginated/Paginated";
export default function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  useEffect(() => {
    const fetchRecipes = () => {
      if (!recipes?.length) {
        dispatch(getHomeRecipes());
      }
    };
    fetchRecipes();
  }, [dispatch, recipes]);

  return (
    <>
      <Paginated />
    </>
  );
}
