import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ducati from "./components/ex6-Shop/Ducati";
import Honda from "./components/ex6-Shop/Honda";
import Products from "./components/ex6-Shop/Products";
import Category from "./components/ex6-Shop/Category";
const App6 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Products />} />
        <Route path="/category" element={<Category />}>
          <Route path="ducati" element={<Ducati />} />
          <Route path="honda" element={<Honda />} />
        </Route>
        <Route path="/*" element={<h2>Error: 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App6;
