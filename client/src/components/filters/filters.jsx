import { useSelector, useDispatch } from "react-redux";
import {
  clearFilteredRecipes,
  filterByName,
  filterByOrigin,
  filterByDiet,
  sortAlphOrder,
  sortScoreOrder,
  setCurrentPage,
} from "../../redux/actions";
import "./filters.css";
import { useState } from "react";

export default function Filters() {
  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();

  const [options, setOptions] = useState({
    input: "",
    diet: "All Diets",
    origin: "All Origins",
    alphOrder: "By Default",
    scoreOrder: "Health score",
  });

  const handleAll = () => {
    setOptions({
      input: "",
      diet: "All Diets",
      origin: "All Origins",
      alphOrder: "By Default",
      scoreOrder: "Health score",
    });
    dispatch(clearFilteredRecipes());
    dispatch(setCurrentPage(1));
  };

  const handleChange = (e) => {
    setOptions({
      ...options,
      [e.target.name]: [e.target.value],
    });
    dispatcher(e);
  };

  const dispatcher = (e) => {
    const { value, name } = e.target;
    if (name === "input" && value) dispatch(filterByName(value));

    if (name === "diet" && value !== "All Diets") dispatch(filterByDiet(value));

    if (name === "origin" && value !== "All Origins")
      dispatch(filterByOrigin(value));

    if (name === "alphOrder" && value !== "By Default")
      dispatch(sortAlphOrder(value));

    if (name === "scoreOrder" && value !== "Health score")
      dispatch(sortScoreOrder(value));

    dispatch(setCurrentPage(1));
  };

  return (
    <div>
      <input
        name="input"
        value={options.input}
        className="searchInput"
        type="text"
        onChange={handleChange}
        placeholder="Search: Corn Avocado Salsa"
      />

      <select
        name="diet"
        value={options.diet}
        className="selectFilter"
        onChange={handleChange}
      >
        <option>All Diets</option>
        {diets.map((diet, index) => (
          <option key={diet + index}>{diet}</option>
        ))}
      </select>

      <select
        name="origin"
        value={options.origin}
        className="selectFilter"
        onChange={handleChange}
      >
        <option>All Origins</option>
        <option>From API</option>
        <option>From DB</option>
      </select>

      <select
        name="alphOrder"
        value={options.alphOrder}
        className="selectFilter"
        onChange={handleChange}
      >
        <option>By Default</option>
        <option>A-Z</option>
        <option>Z-A</option>
      </select>

      <select
        name="scoreOrder"
        value={options.scoreOrder}
        className="selectFilter"
        onChange={handleChange}
      >
        <option>Health score</option>
        <option>100 - 0</option>
        <option>0 - 100</option>
      </select>

      <button onClick={handleAll} className="btn">
        All
      </button>
    </div>
  );
}