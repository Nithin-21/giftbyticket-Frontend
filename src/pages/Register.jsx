import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../styles/Register.css";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleRegister = async (e) => {

    e.preventDefault();

    let validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    }
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      validationErrors.email = "Enter valid email";
    }

    if (!mobile.trim()) {
      validationErrors.mobile = "Mobile number is required";
    }
    else if (
      !/^\d{10}$/.test(mobile)
    ) {
      validationErrors.mobile =
        "Enter valid 10 digit mobile number";
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

      alert("Registration Failed");

      console.error(error);

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
            className={
              errors.name ? "error-input" : ""
            }
            placeholder="Full Name"
            value={name}
            onChange={(e) => {

              setName(e.target.value);

              if (errors.name) {
                setErrors(prev => ({
                  ...prev,
                  name: ""
                }));
              }

            }}
          />

          {
            errors.name &&
            <span className="error-text">
              {errors.name}
            </span>
          }

          <input
            className={
              errors.email ? "error-input" : ""
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
            className={
              errors.mobile ? "error-input" : ""
            }
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => {

              setMobile(e.target.value);

              if (errors.mobile) {
                setErrors(prev => ({
                  ...prev,
                  mobile: ""
                }));
              }

            }}
          />

          {
            errors.mobile &&
            <span className="error-text">
              {errors.mobile}
            </span>
          }

          <input
            type="password"
            className={
              errors.password ? "error-input" : ""
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
            Register
          </button>

        </form>

        <p className="login-link">

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