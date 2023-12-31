import "./RecipeCard.css";
import { Link } from "react-router-dom";
export default function RecipeCard(props) {
  const { id, image, title, diet } = props;
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });
  return (
    <Link to={`/detail/${id}`} className="link">
      <div className="card">
        <h1 className="cardTitle">{title}</h1>
        <img className="cardImage" src={image} alt={`${title}`} />
        {
          diet.length 
          ? (<p className="cardDescription">Diet: {formatter.format(diet)}.</p>) 
          : (<p className="cardDescription">No related diets.</p>)
        }
      </div>
    </Link>
  );
}
