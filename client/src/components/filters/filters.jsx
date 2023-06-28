import { useSelector } from "react-redux";

export default function Filters() {
  const diets = useSelector(state => state.diets);

  const handleSelectChange = (event) => {
    const selectedDiet = event.target.value;
    console.log(selectedDiet);
  };

  return (
    <div>
      <select onChange={handleSelectChange}>
        <option>All Diets</option>
        {diets.map(diet => (
          <option key={diet}>{diet}</option>
        ))}
      </select>
    </div>
  );
}