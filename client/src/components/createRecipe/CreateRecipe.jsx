import "./Module.CreateRecipe.css";
export default function CreateRecipe() {

  return (
    <div className="container">
      <form className="allInputs">
        <div className="inputs">
          <label>Recipe Name:</label>
          <input type="text" placeholder="Chiles stuffed with huitlacoche..." />
        </div>

        <div className="inputs">
          <label>URL image:</label>
          <input type="text" placeholder="https://imageurle.com.ar/" />
        </div>
        <div className="inputs">
          <label>Summary</label>
          <input
            type="text"
            placeholder="
            Lightly blend the cream and cheese, serve in a pan and sprinkle with chopped cilantro. reserve"
          />
        </div>

        <div className="inputs">
          <label>Health Score:</label>
          <input 
             type="number" 
             step={0.1} 
             min={0} 
              max={10}
            placeholder="7.5" 
            />
        </div>

        <div className="inputs">
          <label>Steps:</label>
          <input
            type="text"
            placeholder="
            Lightly blend the cream and cheese, serve in a pan and sprinkle with chopped cilantro. reserve"
          />
        </div>
        <div className="inputs">
          <label>Diets:</label>
          <input type="text" placeholder="Glutten free, vegan, etc..." />
        </div>

        <button className="btnCreate">Create</button>
      </form>
    </div>
  );
}
