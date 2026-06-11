import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import { getUserById, updateUser } from "../services/userService";

import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button
} from "@mui/material";

function Profile() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  
  const userId = localStorage.getItem("userId");

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
    <>
      <Navbar />

      <Box sx={{ display: "flex" }}>

        <Sidebar />

        <Box sx={{ flexGrow: 1, p: 3 }}>

          <Card sx={{ maxWidth: 600 }}>

            <CardContent>

              <Typography
                variant="h4"
                gutterBottom
              >
                Profile
              </Typography>

              <TextField
                fullWidth
                label="Name"
                margin="normal"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

              <TextField
                fullWidth
                label="Email"
                margin="normal"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <TextField
                fullWidth
                label="Mobile"
                margin="normal"
                value={mobile}
                onChange={(e) =>
                  setMobile(e.target.value)
                }
              />

              <br />
              <br />

              <Button
                variant="contained"
                onClick={handleUpdate}
              >
                Update Profile
              </Button>

            </CardContent>

          </Card>

        </Box>

      </Box>
    </>
  );
}

export default Profile;