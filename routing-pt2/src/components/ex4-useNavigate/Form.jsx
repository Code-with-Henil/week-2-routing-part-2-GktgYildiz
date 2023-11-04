import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Form = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleFormSubmit = () => {
    if (!userInfo.firstName || !userInfo.lastName || !userInfo.email) {
      navigate("/*");
    } else {
      navigate("/confirmed");
    }
  };
  return (
    <div className="FormPage">
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
