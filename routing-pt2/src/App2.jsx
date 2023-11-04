import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./components/ex2-NavLink/Services";
import Products from "./components/ex2-NavLink/Products";
import Contacts from "./components/ex2-NavLink/Contacts";
import "./components/ex2-NavLink/activePage.css";
const App2 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/*" element={<h2>Error: 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App2;
