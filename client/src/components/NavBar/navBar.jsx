import { Link } from "react-router-dom";
import "./navBar.css";
import sendRequestName from "./sendRequestName";
import { useState } from "react";
export default function NavBar() {

  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) =>{
    setSearchValue(event.target.value)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await sendRequestName(searchValue);
  }
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
      <form 
      onSubmit={handleSubmit}
      type="submit">
        <input
        value={searchValue}
        onChange={handleChange}
          className="searchInput"
          type="text"
          placeholder="Search: Potato hash with greens..."
        />
        <button className="btn">Search Recipe</button>
      </form>
    </div>
  );
}
