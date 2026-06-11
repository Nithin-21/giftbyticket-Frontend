import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";





function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  
    e.preventDefault();
  
    try {
  
      const data = await loginUser(email, password);
  
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("userId", data.id);
  
      if (data.role === "ADMIN") {
  
        navigate("/dashboard");
  
      }
      else {
  
        navigate("/user-dashboard");
  
      }
  
    }
    catch (error) {
  
      alert("Login Failed");
  
      console.error(error);
  
    }
  
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>

      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button type="submit">Login</button>
      <Link to="/register">
        New User? Register Here
      </Link>
    </form>
  );
}

export default Login;