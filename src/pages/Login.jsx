import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "../styles/Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const data = await loginUser(email, password);

      console.log(data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("userId", data.id);

      if (data.role === "ADMIN") {
        navigate("/dashboard");
      } else {
        navigate("/user-dashboard");
      }

    } catch (error) {

      alert("Login Failed");
      console.error(error);

    }
  };

  return (
    <div className="login-container">

      <div className="login-left">

        <h1>🎁 GiftByTicket</h1>

        <p>
          Launch reward campaigns, engage customers,
          and manage winners from one platform.
        </p>

        <div className="feature">🎯 Create Campaigns</div>
        <div className="feature">🎟 Manage Coupons</div>
        <div className="feature">🏆 Pick Winners</div>
        <div className="feature">📊 Analytics Dashboard</div>

      </div>

      <div className="login-card">

        <h2>Welcome Back 👋</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

          <p className="register-text">
            New User?{" "}
            <Link to="/register">
              Register Here
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;