import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/ex1-Link/Home";
import About from "./components/ex1-Link/About";
import "./index.css";
const App1 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<h2>Error: 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App1;
