import { Link } from "react-router-dom";
import "./navBar.css";
import {
  recipesByName,
  clearFilteredRecipes,
  setCurrentPage,
} from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Filters from "../filters/filters.jsx";

export default function NavBar() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue) {
      dispatch(recipesByName(searchValue));
      setSearchValue("");
      dispatch(setCurrentPage(1));
    }
  };

  const handleClick = () => {
    dispatch(clearFilteredRecipes());
    dispatch(setCurrentPage(1));
  };
  return (
    <div className="navBar">
      <Link to="/">
        <button className="btn">Exit</button>
      </Link>
      <Link to="/home">
        <button className="btn">Home</button>
      </Link>

      <Link to="/create-recipe">
        <button className="btn">Create Recipe</button>
      </Link>
      <form onSubmit={handleSubmit} type="submit">
        <input
          value={searchValue}
          onChange={handleChange}
          className="searchInput"
          type="text"
          placeholder="Search: Potato hash with greens..."
        />
        <button className="btn">Search Recipe</button>
      </form>

      <button onClick={handleClick} className="btn">
        All
      </button>
      <Filters />
    </div>
  );
}
