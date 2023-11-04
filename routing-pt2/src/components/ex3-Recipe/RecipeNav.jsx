import recipes from "./RecipeData";
import { Link } from "react-router-dom";
const RecipeNav = () => {
  return (
    <div className="list-of-recipes">
      <h1>All Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}> {recipe.title}</Link>
            {/*    <Link to={`/recipe/${recipe.id}`}> {recipe.title}</Link> This was the hardest part for me the figure out */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeNav;
