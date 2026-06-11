import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button
} from "@mui/material";

import {
  getCouponById,
  updateCoupon
} from "../services/couponService";

function EditCoupon() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState("");
  const [couponTitle, setCouponTitle] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  useEffect(() => {

    loadCoupon();

  }, []);

  const loadCoupon = async () => {

    try {

      const response = await getCouponById(id);

      setCouponCode(response.data.couponCode);
      setCouponTitle(response.data.couponTitle);
      setDiscountAmount(response.data.discountAmount);
      setExpiryDate(response.data.expiryDate);

    } catch (error) {

      console.error(error);

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await updateCoupon(id, {
        couponCode,
        couponTitle,
        discountAmount,
        expiryDate
      });

      alert("Coupon Updated Successfully");

      navigate("/coupons");

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
            Edit Coupon
          </Typography>

          <form onSubmit={handleSubmit}>

            <TextField
              fullWidth
              label="Coupon Code"
              margin="normal"
              value={couponCode}
              onChange={(e) =>
                setCouponCode(e.target.value)
              }
            />

            <TextField
              fullWidth
              label="Coupon Title"
              margin="normal"
              value={couponTitle}
              onChange={(e) =>
                setCouponTitle(e.target.value)
              }
            />

            <TextField
              fullWidth
              type="number"
              label="Discount Amount"
              margin="normal"
              value={discountAmount}
              onChange={(e) =>
                setDiscountAmount(e.target.value)
              }
            />

            <TextField
              fullWidth
              type="date"
              margin="normal"
              value={expiryDate}
              onChange={(e) =>
                setExpiryDate(e.target.value)
              }
            />

            <br />
            <br />

            <Button
              type="submit"
              variant="contained"
              fullWidth
            >
              Update Coupon
            </Button>

          </form>

        </CardContent>

      </Card>

    </Container>

  );
}

export default EditCoupon;