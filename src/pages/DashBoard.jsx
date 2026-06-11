import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function Dashboard() {
  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>

          <Typography variant="h6" sx={{ mb: 3 }}>
            Welcome to GiftByTicket
          </Typography>

          <Grid container spacing={3}>
            {/* Total Campaigns */}
            <Grid item xs={12} md={4}>
              <Card elevation={5}>
                <CardContent>
                  <Typography variant="h6" color="primary">
                    Total Campaigns
                  </Typography>

                  <Typography variant="h3">
                    5
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Total Coupons */}
            <Grid item xs={12} md={4}>
              <Card elevation={5}>
                <CardContent>
                  <Typography variant="h6" color="success.main">
                    Total Coupons
                  </Typography>

                  <Typography variant="h3">
                    20
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Winners */}
            <Grid item xs={12} md={4}>
              <Card elevation={5}>
                <CardContent>
                  <Typography variant="h6" color="secondary">
                    Total Winners
                  </Typography>

                  <Typography variant="h3">
                    8
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;