import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../styles/Register.css";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await registerUser(
        name,
        email,
        mobile,
        password
      );

      alert("Registration Successful");

      navigate("/login");

    }
    catch (error) {

      console.error(error);

      alert("Registration Failed");

    }

  };

  return (

    <div className="register-page">

      <div className="left-section">

        <h1>🎁 GiftByTicket</h1>

        <p>
          Join giveaway campaigns and
          unlock exciting rewards.
        </p>

      </div>

      <div className="register-card">

        <h1>Create Account</h1>

        <form onSubmit={handleRegister}>

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">

            Register

          </button>

        </form>

        <p>

          Already have an account?

          <Link to="/login">

            Login

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;