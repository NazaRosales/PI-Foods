import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { GET_HOME_FILTERED } from "../../redux/actions";
import isUUID from "./isUUID";
import "./filters.css"
export default function Filters() {
  const diets = useSelector((state) => state.diets);
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    diet: "All Diets",
    origin: "All Origins",
    order: "By Default",
    health: "By Default",
  });

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  let auxRecipes = [...recipes];
  if (filters.diet !== "All Diets") {
    auxRecipes = auxRecipes.filter((recipe) =>
      recipe.diet.includes(filters.diet)
    );
  }
  if (filters.origin !== "All Origins") {
    if (filters.origin === "From DB") {
      auxRecipes = auxRecipes.filter((recipe) => isUUID(recipe.id));
    } else if (filters.origin === "From API") {
      auxRecipes = auxRecipes.filter((recipe) => !isUUID(recipe.id));
    }
  }
  if (filters.order === "A-Z") {
    auxRecipes.sort((a, b) => a.title.localeCompare(b.title));
  } else if (filters.order === "Z-A") {
    auxRecipes.sort((a, b) => b.title.localeCompare(a.title));
  }
  if (filters.health === "100 - 0") {
    auxRecipes.sort((a, b) => b.healthScore - a.healthScore);
  } else if (filters.health === "0 - 100") {
    auxRecipes.sort((a, b) => a.healthScore - b.healthScore);
  }

  dispatch({ type: GET_HOME_FILTERED, payload: auxRecipes });

  return (
    <div className="filtersContainer">
      <select name="diet" onChange={handleSelectChange} value={filters.diet} className="selectFilter">
        <option>All Diets</option>
        {diets.map((diet) => (
          <option key={diet}>{diet}</option>
        ))}
      </select>

      <select
       className="selectFilter"
        name="origin"
        onChange={handleSelectChange}
        value={filters.origin}
      >
        <option>All Origins</option>
        <option>From API</option>
        <option>From DB</option>
      </select>

      <select className="selectFilter" name="order" onChange={handleSelectChange} value={filters.order}>
        <option>By Default</option>
        <option>A-Z</option>
        <option>Z-A</option>
      </select>

      <select className="selectFilter"
        name="health"
        onChange={handleSelectChange}
        value={filters.health}
      >
        <option>Health score</option>
        <option>100 - 0</option>
        <option>0 - 100</option>
      </select>
    </div>
  );
}
