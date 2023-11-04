import { useState } from "react";
import { redirect } from "react-router";
import "../ex4-useNavigate/form.css";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    redirect("/dashboard");
  }

  return (
    <div>
      <h1>Login Page</h1>
      <label>
        {" "}
        Username: admin
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>Password:test</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
