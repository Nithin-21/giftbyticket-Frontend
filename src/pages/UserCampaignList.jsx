import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button
} from "@mui/material";

import { getAllCampaigns } from "../services/campaignService";

function UserCampaignList() {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {

    loadCampaigns();

  }, []);

  const loadCampaigns = async () => {

    try {

      const response = await getAllCampaigns();

      setCampaigns(response.data);

    }
    catch (error) {

      console.error(error);

    }

  };

  const handleParticipate = (id) => {

    alert(
      `Participating in Campaign ID ${id}`
    );

  };

  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex" }}>

        <Sidebar />

        <Box sx={{ flexGrow: 1, p: 3 }}>

          <Typography
            variant="h4"
            gutterBottom
          >
            Available Campaigns
          </Typography>

          <Grid container spacing={3}>

            {campaigns.map((campaign) => (

              <Grid
                item
                xs={12}
                md={4}
                key={campaign.id}
              >

                <Card>

                  <CardContent>

                    <Typography variant="h5">

                      {campaign.campaignName}

                    </Typography>

                    <br />

                    <Typography>

                      {campaign.description}

                    </Typography>

                    <br />

                    <Typography>

                      Entry Fee : ₹ {campaign.entryFee}

                    </Typography>

                    <br />

                    <Typography>

                      Status : {campaign.status}

                    </Typography>

                    <br />

                    <Button
                      variant="contained"
                      onClick={() =>
                        handleParticipate(
                          campaign.id
                        )
                      }
                    >
                      Participate
                    </Button>

                  </CardContent>

                </Card>

              </Grid>

            ))}

          </Grid>

        </Box>

      </Box>

    </>
  );
}

export default UserCampaignList;