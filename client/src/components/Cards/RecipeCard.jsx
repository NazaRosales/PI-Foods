import "./Module.RecipeCard.css";
import { Link } from "react-router-dom";
export default function RecipeCard(props) {
  const { image, title, diet } = props;
  const formatter = new Intl.ListFormat('en',{ style: 'long', type: 'conjunction' })
  return (
    <Link to = {`/detail/${id}`} className="link">
      <div className="card">
        <h1 className="cardTitle">{title}</h1>
        <img className="cardImage" src={image} alt={`${title}`} />
        <p className="cardDescription">{diet && formatter.format(diet)}</p>
      </div>
    </Link>
  );
}
