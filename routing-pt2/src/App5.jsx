import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/ex5-Redirect/Dashboard";
import LoginPage from "./components/ex5-Redirect/LoginPage";
const App5 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<h2>Error: 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App5;
