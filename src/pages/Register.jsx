import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

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

      navigate("/");

    }
    catch (error) {

      alert("Registration Failed");

      console.error(error);

    }

  };

  return (

    <form onSubmit={handleRegister}>

      <h1>Register</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        placeholder="Mobile"
        value={mobile}
        onChange={(e) =>
          setMobile(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button type="submit">

        Register

      </button>

    </form>

  );

}

export default Register;