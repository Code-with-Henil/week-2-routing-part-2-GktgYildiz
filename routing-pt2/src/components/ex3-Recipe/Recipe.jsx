import { useParams } from "react-router-dom";
import RecipeDetail from "./RecipeDetail";
import recipes from "./RecipeData";

const Recipe = () => {
  const { recipeId } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(recipeId));
  if (!recipe) {
    return (
      <div>
        {" "}
        <p>Oops... Recipe Not Found.</p>
        <p>Let me check my mom&apos;s recipe book.</p>
      </div>
    );
  }
  return <RecipeDetail />;
};

export default Recipe;
