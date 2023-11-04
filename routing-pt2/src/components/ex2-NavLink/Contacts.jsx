import { Link, NavLink } from "react-router-dom";
const Contacts = () => {
  return (
    <>
      <h1>
        This is <span className="currentPage">CONTACTS</span> Page
      </h1>

      <Link to="/">Services</Link>
      <br />
      <Link to="/products">Products</Link>
      <br />
      <NavLink to="/contacts">Contact</NavLink>
    </>
  );
};

export default Contacts;
