import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "../styles/Login.css";

function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [errors, setErrors] = useState({});

const navigate = useNavigate();

const handleLogin = async (e) => {


e.preventDefault();

let validationErrors = {};

if (!email.trim()) {

  validationErrors.email =
    "Email is required";

}
else if (
  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(email)
) {

  validationErrors.email =
    "Enter valid email";

}

if (!password.trim()) {

  validationErrors.password =
    "Password is required";

}

if (
  Object.keys(validationErrors).length > 0
) {

  setErrors(validationErrors);
  return;

}

setErrors({});

try {

  const data = await loginUser(
    email,
    password
  );

  localStorage.setItem(
    "token",
    data.token
  );

  localStorage.setItem(
    "role",
    data.role
  );

  localStorage.setItem(
    "userId",
    data.id
  );

  if (data.role === "ADMIN") {

    navigate("/dashboard");

  }
  else {

    navigate("/user-dashboard");

  }

}
catch (error) {

  alert("Invalid Email or Password");

  console.error(error);

}


};

return (


<div className="login-container">

  <div className="login-left">

    <h1>🎁 GiftByTicket</h1>

    <p>
      Join exciting giveaway campaigns,
      unlock instant coupons and win amazing prizes.
    </p>

    <div className="feature">
      🎟 Join Active Campaigns
    </div>

    <div className="feature">
      🎁 Receive Instant Coupons
    </div>

    <div className="feature">
      🏆 Win Exciting Rewards
    </div>

    <div className="feature">
      🔒 Fair & Transparent Winners
    </div>

  </div>

  <div className="login-card">

    <h2>Welcome Back 👋</h2>

    <form onSubmit={handleLogin}>

      {
        Object.keys(errors).length > 0 &&
        <div className="error-box">
          Please fill all required fields.
        </div>
      }

      <input
        type="email"
        className={
          errors.email
            ? "error-input"
            : ""
        }
        placeholder="Email Address"
        value={email}
        onChange={(e) => {

          setEmail(e.target.value);

          if (errors.email) {

            setErrors(prev => ({
              ...prev,
              email: ""
            }));

          }

        }}
      />

      {
        errors.email &&
        <span className="error-text">
          {errors.email}
        </span>
      }

      <input
        type="password"
        className={
          errors.password
            ? "error-input"
            : ""
        }
        placeholder="Password"
        value={password}
        onChange={(e) => {

          setPassword(e.target.value);

          if (errors.password) {

            setErrors(prev => ({
              ...prev,
              password: ""
            }));

          }

        }}
      />

      {
        errors.password &&
        <span className="error-text">
          {errors.password}
        </span>
      }

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
