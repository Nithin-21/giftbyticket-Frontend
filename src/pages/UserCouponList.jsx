import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Box,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TextField,
  Button
} from "@mui/material";

import { getCouponsByUser, markCouponUsed }
from "../services/userCouponService";

function UserCouponList() {

  const [userId, setUserId] = useState("");
  const [coupons, setCoupons] = useState([]);

  const loadCoupons = async () => {

    try {

      const response = await getCouponsByUser(userId);

      setCoupons(response.data);

    } catch (error) {

      console.error(error);

      alert("Failed");

    }

  };

  const handleUsed = async (id) => {

    try {

      await markCouponUsed(id);

      alert("Coupon marked as used");

      loadCoupons();

    } catch (error) {

      console.error(error);

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
            User Coupons
          </Typography>

          <TextField
            label="User ID"
            value={userId}
            onChange={(e) =>
              setUserId(e.target.value)
            }
          />

          <Button
            sx={{ ml: 2 }}
            variant="contained"
            onClick={loadCoupons}
          >
            Search
          </Button>

          <br /><br />

          <TableContainer component={Paper}>

            <Table>

              <TableHead>

                <TableRow>

                  <TableCell>ID</TableCell>

                  <TableCell>
                    Giveaway Code
                  </TableCell>

                  <TableCell>
                    User
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

                  <TableCell>
                    Action
                  </TableCell>

                </TableRow>

              </TableHead>

              <TableBody>

                {coupons.map((coupon) => (

                  <TableRow key={coupon.id}>

                    <TableCell>
                      {coupon.id}
                    </TableCell>

                    <TableCell>
                      {coupon.giveawayCode}
                    </TableCell>

                    <TableCell>
                      {coupon.userName}
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

                    <TableCell>

                      {!coupon.used && (

                        <Button
                          color="success"
                          variant="contained"
                          onClick={() =>
                            handleUsed(coupon.id)
                          }
                        >
                          Mark Used
                        </Button>

                      )}

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

export default UserCouponList;