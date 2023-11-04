import data from "./data.js";
import { Link, Outlet } from "react-router-dom";
const Category = () => {
  return (
    <div>
      <h1>Welcome to the Categories</h1>
      <div className="category-btns">
        <Link to={"/category/ducati"}>
          <button className="cat-btn"> Ducati</button>
        </Link>
        <Link to={"/category/honda"}>
          <button className="cat-btn">Honda</button>
        </Link>
      </div>
      <ul className="categories-list">
        {data.categories.map((category) => (
          <li key={category.id} className="category-item">
            <h2 className="category-name">{category.name}</h2>
            <ul className="products-list">
              {category.products.map((product) => (
                <li key={product.id} className="product-item">
                  <Link to={`${category.path}`}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="product-image"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>{" "}
      <Outlet />
    </div>
  );
};

export default Category;
