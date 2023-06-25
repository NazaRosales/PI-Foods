import "./module.Home.css";
import RecipeCard from "../Cards/RecipeCard.jsx";

export default function Home() {
 /* const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearch("");
    const response = await sendRequestName(search)
    if(response?.status === 500){
      alert("RECIPE DO NOT EXIST")
    } else{
      console.log(response)
      setRecipes(response); //by query
    }
  };
*/
  const recipes = []

  return (
    <div>
        {recipes?.length > 0 &&
          recipes?.map((recipe) => {
            return (
              <RecipeCard
                key={recipe?.id}
                id={recipe?.id}
                image={recipe?.image}
                title={recipe?.title}
                diet={recipe?.diet}
              />
            );
          })}
    </div>
  );
}
