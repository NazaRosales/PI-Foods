import "./Module.RecipeCard.css";
import { Link } from "react-router-dom";
export default function RecipeCard(props) {
  const { id, image, title, diet } = props;
  const dietString = diet.join(", ") + ".";
  return (
    <Link to = {`/detail/${id}`} className="link">
      <div className="card">
        <h1 className="cardTitle">{title}</h1>
        <img className="cardImage" src={image} alt={`${title}`} />
        <p className="cardDescription">{title}</p>
        <p className="cardDescription">{dietString}</p>
        <p className="cardDescription">id: {id}</p>
      </div>
    </Link>
  );
}
