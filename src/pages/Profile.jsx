import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { getUserById, updateUser } from "../services/userService";
import "../styles/Profile.css";

function Profile() {

  const userId = localStorage.getItem("userId");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {

    loadUser();

  }, []);

  const loadUser = async () => {

    try {

      const response = await getUserById(userId);

      setName(response.data.name);
      setEmail(response.data.email);
      setMobile(response.data.mobile);

    }
    catch (error) {

      console.error(error);

    }

  };

  const handleUpdate = async () => {

    try {

      await updateUser(
        userId,
        {
          name,
          email,
          mobile
        }
      );

      alert("Profile Updated Successfully");

    }
    catch (error) {

      console.error(error);

      alert("Update Failed");

    }

  };

  return (

    <div className="profile-layout">

      <Sidebar />

      <div className="profile-container">

        <div className="profile-card">

          <div className="profile-top">

            <div className="profile-avatar">

              {
                name
                  ? name
                      .split(" ")
                      .map(word => word[0])
                      .join("")
                      .toUpperCase()
                  : "U"
              }

            </div>

            <h1>
              {name}
            </h1>

            <p>
              GiftByTicket Member
            </p>

          </div>

          <div className="profile-form">

            <div className="field">

              <label>
                Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

            </div>

            <div className="field">

              <label>
                Email
              </label>

              <input
                type="email"
                value={email}
                disabled
                //onChange={(e) => setMobile(e.target.value) }

                
              />

            </div>

            <div className="field">

              <label>
                Mobile Number
              </label>

              <input
                type="text"
                value={mobile}
                disabled
                //onChange={(e) => setMobile(e.target.value) }
              />

            </div>

            <button
              onClick={handleUpdate}
            >

              Save Changes

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Profile;