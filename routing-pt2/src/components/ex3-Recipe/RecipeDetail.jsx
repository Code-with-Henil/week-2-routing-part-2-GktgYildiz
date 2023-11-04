import recipes from "./RecipeData";
import { useParams } from "react-router-dom";
const RecipeDetail = () => {
  const { recipeId } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(recipeId));

  return (
    <div>
      <h2>{recipe.title}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
/* Hey teacher 👋. there is a recipe exapmle on the official documents of react. 
  it helped me on here. I am sharing the link. you can find it at the below, 3rd one
  https://react.dev/learn/rendering-lists    */
