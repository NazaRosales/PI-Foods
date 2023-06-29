import { Link } from "react-router-dom";
import "./navBar.css";
import Filters from "../filters/filters";

export default function NavBar() {

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

      <Filters />
    </div>
  );
}
