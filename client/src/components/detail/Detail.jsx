import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Detail.css";
export default function Detail() {
  const { id } = useParams();
  const URL = `http://localhost:3001/recipes/${id}`;
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
      });
  }, [URL]);
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });

  return (
    <div className="detailContainer">
      {recipe.title ? (
        <section className="detail">
          <div>
            <h2>{recipe?.title}</h2>
            <img
              src={recipe?.image}
              alt={recipe?.title}
              className="imageFood"
            ></img>
          </div>
          <div>
            <p>ID: {id}</p>
            <p>{recipe?.summary}</p>
            <p>Diet: {recipe.diet && formatter.format(recipe?.diet)}</p>
            <p>Health Score: {recipe?.healthScore}</p>
          </div>

          <div>
            <p>Preparation: {recipe?.steps}</p>
          </div>
        </section>
      ) : (
        <div className="detail">
          <h2>The recipe was not found, check that the id is correct.</h2>
        </div>
      )}
    </div>
  );
}
