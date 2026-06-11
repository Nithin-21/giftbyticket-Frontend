import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button
} from "@mui/material";

import {
  getWinnerById,
  updateWinner
} from "../services/winnerService";

function EditWinner() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [campaignId, setCampaignId] = useState("");
  const [userId, setUserId] = useState("");
  const [winnerDate, setWinnerDate] = useState("");

  useEffect(() => {

    loadWinner();

  }, []);

  const loadWinner = async () => {

    try {

      const response = await getWinnerById(id);

      setCampaignId(response.data.campaignId);
      setUserId(response.data.userId);
      setWinnerDate(response.data.winnerDate);

    } catch (error) {

      console.error(error);

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await updateWinner(id, {
        campaignId,
        userId,
        winnerDate
      });

      alert("Winner Updated Successfully");

      navigate("/winners");

    } catch (error) {

      console.error(error);

      alert("Update Failed");

    }

  };

  return (

    <Container maxWidth="sm">

      <Card sx={{ mt: 5 }}>

        <CardContent>

          <Typography
            variant="h4"
            gutterBottom
          >
            Edit Winner
          </Typography>

          <form onSubmit={handleSubmit}>

            <TextField
              fullWidth
              label="Campaign ID"
              margin="normal"
              value={campaignId}
              onChange={(e) =>
                setCampaignId(e.target.value)
              }
            />

            <TextField
              fullWidth
              label="User ID"
              margin="normal"
              value={userId}
              onChange={(e) =>
                setUserId(e.target.value)
              }
            />

            <TextField
              fullWidth
              type="date"
              margin="normal"
              value={winnerDate}
              onChange={(e) =>
                setWinnerDate(e.target.value)
              }
            />

            <br />
            <br />

            <Button
              type="submit"
              variant="contained"
              fullWidth
            >
              Update Winner
            </Button>

          </form>

        </CardContent>

      </Card>

    </Container>

  );
}

export default EditWinner;