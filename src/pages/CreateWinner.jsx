import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button
} from "@mui/material";

import { createWinner } from "../services/winnerService";

function CreateWinner() {

  const navigate = useNavigate();

  const [campaignId, setCampaignId] = useState("");
  const [userId, setUserId] = useState("");
  const [winnerDate, setWinnerDate] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createWinner({
        campaignId,
        userId,
        winnerDate
      });

      alert("Winner Created Successfully");

      navigate("/winners");

    } catch (error) {

      console.error(error);

      alert("Creation Failed");

    }

  };

  return (

    <Container maxWidth="sm">

      <Card sx={{ mt: 5 }}>

        <CardContent>

          <Typography variant="h4" gutterBottom>
            Create Winner
          </Typography>

          <form onSubmit={handleSubmit}>

            <TextField
              fullWidth
              label="Campaign ID"
              margin="normal"
              value={campaignId}
              onChange={(e) => setCampaignId(e.target.value)}
            />

            <TextField
              fullWidth
              label="User ID"
              margin="normal"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />

            <TextField
              fullWidth
              type="date"
              margin="normal"
              value={winnerDate}
              onChange={(e) => setWinnerDate(e.target.value)}
            />

            <br />
            <br />

            <Button
              type="submit"
              variant="contained"
              fullWidth
            >
              Create Winner
            </Button>

          </form>

        </CardContent>

      </Card>

    </Container>
  );
}

export default CreateWinner;