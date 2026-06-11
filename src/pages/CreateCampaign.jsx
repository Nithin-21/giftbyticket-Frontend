import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  MenuItem,
  TextField,
  Typography
} from "@mui/material";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { createCampaign } from "../services/campaignService";

function CreateCampaign() {

  const [campaignName, setCampaignName] = useState("");
  const [description, setDescription] = useState("");
  const [entryFee, setEntryFee] = useState("");
  const [status, setStatus] = useState("ACTIVE");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createCampaign({
        campaignName,
        description,
        entryFee,
        status
      });

      alert("Campaign Created Successfully");

      setCampaignName("");
      setDescription("");
      setEntryFee("");
      setStatus("ACTIVE");

    } catch (error) {

      console.error(error);
      alert("Failed");

    }

  };

  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex" }}>

        <Sidebar />

        <Box sx={{ flexGrow: 1, p: 3 }}>

          <Card sx={{ maxWidth: 700 }}>

            <CardContent>

              <Typography
                variant="h4"
                gutterBottom
              >
                Create Campaign
              </Typography>

              <form onSubmit={handleSubmit}>

                <TextField
                  fullWidth
                  label="Campaign Name"
                  margin="normal"
                  value={campaignName}
                  onChange={(e) =>
                    setCampaignName(e.target.value)
                  }
                />

                <TextField
                  fullWidth
                  label="Description"
                  margin="normal"
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                />

                <TextField
                  fullWidth
                  type="number"
                  label="Entry Fee"
                  margin="normal"
                  value={entryFee}
                  onChange={(e) =>
                    setEntryFee(e.target.value)
                  }
                />

                <TextField
                  select
                  fullWidth
                  label="Status"
                  margin="normal"
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value)
                  }
                >
                  <MenuItem value="ACTIVE">
                    ACTIVE
                  </MenuItem>

                  <MenuItem value="INACTIVE">
                    INACTIVE
                  </MenuItem>
                </TextField>

                <Button
                  variant="contained"
                  type="submit"
                  sx={{ mt: 3 }}
                >
                  Create Campaign
                </Button>

              </form>

            </CardContent>

          </Card>

        </Box>

      </Box>
    </>
  );
}

export default CreateCampaign;