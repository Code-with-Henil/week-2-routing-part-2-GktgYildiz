import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipe from "./components/ex3-Recipe/Recipe";
import RecipeNav from "./components/ex3-Recipe/RecipeNav";
const App3 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RecipeNav />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
        <Route path="/*" element={<h2>Error: 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App3;
