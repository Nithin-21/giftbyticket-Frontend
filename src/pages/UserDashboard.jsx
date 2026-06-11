import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid
} from "@mui/material";

function UserDashboard() {

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
            Welcome User
          </Typography>

          <Grid container spacing={3}>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>

                  <Typography variant="h6">
                    My Participations
                  </Typography>

                  <Typography variant="h3">
                    0
                  </Typography>

                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>

                  <Typography variant="h6">
                    My Coupons
                  </Typography>

                  <Typography variant="h3">
                    0
                  </Typography>

                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>

                  <Typography variant="h6">
                    Winning Coupons
                  </Typography>

                  <Typography variant="h3">
                    0
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

export default UserDashboard;