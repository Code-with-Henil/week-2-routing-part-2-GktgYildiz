import { Link, NavLink } from "react-router-dom";
const Products = () => {
  return (
    <>
      <h1>
        This is <span className="currentPage">PRODUCTS</span> Page
      </h1>

      <Link to="/">Services</Link>
      <br />

      <NavLink to="/products">Products</NavLink>
      <br />
      <Link to="/contacts">Contact</Link>
    </>
  );
};

export default Products;
