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

import { createCoupon } from "../services/couponService";

function CreateCoupon() {

  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState("");
  const [couponTitle, setCouponTitle] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await createCoupon({
        couponCode,
        couponTitle,
        discountAmount,
        expiryDate
      });

      alert("Coupon Created Successfully");

      navigate("/coupons");

    } catch (error) {

      console.error(error);

      alert("Coupon Creation Failed");

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
            Create Coupon
          </Typography>

          <form onSubmit={handleSubmit}>

            <TextField
              fullWidth
              label="Coupon Code"
              margin="normal"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />

            <TextField
              fullWidth
              label="Coupon Title"
              margin="normal"
              value={couponTitle}
              onChange={(e) => setCouponTitle(e.target.value)}
            />

            <TextField
              fullWidth
              type="number"
              label="Discount Amount"
              margin="normal"
              value={discountAmount}
              onChange={(e) => setDiscountAmount(e.target.value)}
            />

            <TextField
              fullWidth
              type="date"
              margin="normal"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />

            <br />
            <br />

            <Button
              type="submit"
              variant="contained"
              fullWidth
            >
              Create Coupon
            </Button>

          </form>

        </CardContent>

      </Card>

    </Container>
  );
}

export default CreateCoupon;