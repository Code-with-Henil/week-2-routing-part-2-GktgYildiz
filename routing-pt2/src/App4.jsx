import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompletedPage from "./components/ex4-useNavigate/CompletedPage";
import Form from "./components/ex4-useNavigate/Form";
const App4 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/confirmed" element={<CompletedPage />} />
        <Route path="/*" element={<h2>Error: 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App4;
