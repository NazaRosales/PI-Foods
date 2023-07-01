import { useSelector, useDispatch } from "react-redux";
import {
  getHomeFiltered,
  clearFilteredRecipes,
  setCurrentPage,
} from "../../redux/actions";
import { useState } from "react";
import "./filters.css";
export default function Filters() {
  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();
  const [filters, setFilter] = useState({
    input: "",
    diet: "",
    origin: "",
    alphOrder: "",
    scoreOrder: "",
  });

  const handleAll = (event) => {
    event.preventDefault();
    setFilter({
      input: "",
      diet: "",
      origin: "",
      alphOrder: "",
      scoreOrder: "",
    });

    dispatch(setCurrentPage(1));
    dispatch(clearFilteredRecipes());
    dispatch(getHomeFiltered({}));
  };
  const handleChanges = (event) => {
    const { value, name } = event.target;
    setFilter({
      ...filters,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getHomeFiltered(filters));
    dispatch(setCurrentPage(1));
  };
  return (
    <>
      <form>
        <input
          value={filters.input}
          name="input"
          onChange={handleChanges}
          onSubmit={handleSubmit}
          className="searchInput"
          type="text"
          placeholder="Search: Corn Avocado Salsa"
        />
        <button onClick={handleSubmit} className="btn">
          Search Recipe
        </button>

        <select
          name="diet"
          value={filters.diet}
          onChange={handleChanges}
          className="selectFilter"
        >
          <option>All Diets</option>
          {diets.map((diet) => (
            <option key={diet}>{diet}</option>
          ))}
        </select>

        <select
          name="origin"
          value={filters.origin}
          onChange={handleChanges}
          className="selectFilter"
        >
          <option>All Origins</option>
          <option>From API</option>
          <option>From DB</option>
        </select>

        <select
          name="alphOrder"
          value={filters.alphOrder}
          onChange={handleChanges}
          className="selectFilter"
        >
          <option>By Default</option>
          <option>A-Z</option>
          <option>Z-A</option>
        </select>

        <select
          name="scoreOrder"
          value={filters.scoreOrder}
          onChange={handleChanges}
          className="selectFilter"
        >
          <option>Health score</option>
          <option>100 - 0</option>
          <option>0 - 100</option>
        </select>
      </form>
      <button onClick={handleAll} className="btn">
        All
      </button>
    </>
  );
}