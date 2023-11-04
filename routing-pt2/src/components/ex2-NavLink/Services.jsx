import { Link, NavLink } from "react-router-dom";
const Services = () => {
  return (
    <>
      <h1>
        This is <span className="currentPage">SERVICES</span> Page
      </h1>
      <NavLink to="/">Services</NavLink>
      <br />
      <Link to="/products">Products</Link>
      <br />
      <Link to="/contacts">Contact</Link>
    </>
  );
};

export default Services;
