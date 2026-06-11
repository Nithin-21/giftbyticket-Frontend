import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

import { getCouponsByUser } from "../services/userCouponService";

function MyCoupons() {

  const [userId, setUserId] = useState("");
  const [coupons, setCoupons] = useState([]);

  const loadCoupons = async () => {

    try {

      const response = await getCouponsByUser(userId);

      setCoupons(response.data);

    } catch (error) {

      console.error(error);

      alert("Failed to load coupons");

    }

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
            My Coupons
          </Typography>

          <TextField
            label="User ID"
            value={userId}
            onChange={(e) =>
              setUserId(e.target.value)
            }
          />

          <Button
            variant="contained"
            sx={{ ml: 2 }}
            onClick={loadCoupons}
          >
            Search
          </Button>

          <br /><br />

          <TableContainer component={Paper}>

            <Table>

              <TableHead>

                <TableRow>

                  <TableCell>
                    Giveaway Code
                  </TableCell>

                  <TableCell>
                    Coupon
                  </TableCell>

                  <TableCell>
                    Campaign
                  </TableCell>

                  <TableCell>
                    Used
                  </TableCell>

                </TableRow>

              </TableHead>

              <TableBody>

                {coupons.map((coupon) => (

                  <TableRow key={coupon.id}>

                    <TableCell>
                      {coupon.giveawayCode}
                    </TableCell>

                    <TableCell>
                      {coupon.couponTitle}
                    </TableCell>

                    <TableCell>
                      {coupon.campaignName}
                    </TableCell>

                    <TableCell>

                      {coupon.used
                        ? "Yes"
                        : "No"}

                    </TableCell>

                  </TableRow>

                ))}

              </TableBody>

            </Table>

          </TableContainer>

        </Box>

      </Box>

    </>
  );
}

export default MyCoupons;