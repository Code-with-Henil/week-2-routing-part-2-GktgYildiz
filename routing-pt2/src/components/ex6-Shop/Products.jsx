import { Link } from "react-router-dom";
import "./styling.css";
const Products = () => {
  return (
    <div className="products-container">
      <h1>Welcome to the Products</h1>
      <h2>You can click on category button below.</h2>
      <Link to="category">
        <button className="categories-button">Categories</button>
      </Link>
    </div>
  );
};

export default Products;
