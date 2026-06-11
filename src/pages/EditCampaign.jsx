import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

import {
  getCampaignById,
  updateCampaign
} from "../services/campaignService";

function EditCampaign() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [campaignName, setCampaignName] = useState("");
  const [description, setDescription] = useState("");
  const [entryFee, setEntryFee] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    loadCampaign();
  }, []);

  const loadCampaign = async () => {

    try {

      const response = await getCampaignById(id);

      setCampaignName(response.data.campaignName);
      setDescription(response.data.description);
      setEntryFee(response.data.entryFee);
      setStatus(response.data.status);

    } catch (error) {

      console.error(error);

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await updateCampaign(id, {
        campaignName,
        description,
        entryFee,
        status
      });

      alert("Campaign Updated Successfully");

      navigate("/campaigns");

    } catch (error) {

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

          <Card sx={{ maxWidth: 700 }}>

            <CardContent>

              <Typography
                variant="h4"
                gutterBottom
              >
                Edit Campaign
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
                  Update Campaign
                </Button>

              </form>

            </CardContent>

          </Card>

        </Box>

      </Box>

    </>
  );
}

export default EditCampaign;