import "./module.Home.css";
import RecipeCard from "../Cards/RecipeCard.jsx";
import { useEffect } from "react";
import { getHomeRecipes } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  /* const [search, setSearch] = useState("");
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

  const dispatch = useDispatch();
  const recipes = useSelector( state => state.recipes )
  
  useEffect(() =>{  
  if(!recipes?.length){
     dispatch(getHomeRecipes())
  }
  },[recipes])
  return (
    <div className="cards">
      {/* {recipes?.length > 0 &&
        recipes?.map((recipe) => {
          return (
            <RecipeCard
              key={recipe?.id}
              id={recipe?.id}
              image={recipe?.image}
              title={recipe?.title}
              diet={recipe?.diets}
            />
          );
        })} */}
    </div>
  );
}
