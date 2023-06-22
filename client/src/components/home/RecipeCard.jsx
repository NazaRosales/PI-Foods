import "./module.RecipeCard.css";
export default function RecipeCard(props) {
  const { id, image, title, diet } = props;
  return (
    <div className="card">
      <h1>{title}</h1>
      <img className="cardImage" src={image} alt={`${title}`} />
      <p>{title}</p>
      <p>{diet}</p>
      <p>id: {id}</p>
    </div>
  );
}
