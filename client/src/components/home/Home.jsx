import { Link } from "react-router-dom";
import "./module.Home.css";
import { useState } from "react";
const sendRequestName = require('./controllers/sendRequestName.js')

export default function Home() {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch("");
    //Manejar el submit del form
    sendRequestName(search);
  };
  return (
    <div className="navBar">
      <div className="navItem">
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      <div className="navItem">
        <select name="filet">
          <optgroup label="Order by:">
            <option value="default">Default</option>
            <option value="a-z">A-Z</option>
            <option value="healtScore">Health score</option>
          </optgroup>
        </select>
      </div>

      <div className="navItem">
        <form type="submit" className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search: Potato hash with greens..."
            value={search}
            onChange={handleSearch}
          />
          <button>Search Recipe</button>
        </form>
      </div>

      <div className="navItem">
        <select name="typeOfDiet">
          <optgroup label="Diet">
            <option value="None">None</option>
            <option value="Vegan">Vegan</option>
            <option value="Sugar Free">Sugar free</option>
          </optgroup>
        </select>
      </div>

      <div className="navItem">
        <select name="origin">
          <optgroup label="Origin">
            <option value="Vegan">Data Base</option>
            <option value="Sugar Free">API</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
}
