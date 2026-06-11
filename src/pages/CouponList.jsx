import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/CouponList.css";

import {
  Box,
  Typography,
  TextField,
  Button
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import {
  getAllCoupons,
  deleteCoupon
} from "../services/couponService";

function CouponList() {

  const [coupons, setCoupons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    loadCoupons();

  }, []);

  const loadCoupons = async () => {

    try {

      const response = await getAllCoupons();

      setCoupons(response.data);

    }
    catch (error) {

      console.error(error);

    }

  };

  const handleDelete = async (id) => {

    try {

      await deleteCoupon(id);

      alert("Coupon Deleted Successfully");

      loadCoupons();

    }
    catch (error) {

      console.error(error);

      alert("Delete Failed");

    }

  };

  return (

    <Box
      sx={{
        display: "flex",
        background: "#071226",
        minHeight: "100vh"
      }}
    >

      <Sidebar />

      <Box
        sx={{
          flexGrow: 1,
          p: 4
        }}
      >

        <Typography
          variant="h4"
          sx={{
            color: "white",
            mb: 4,
            fontWeight: "bold"
          }}
        >
          Coupon List
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 4
          }}
        >

          <TextField
            label="Search Coupon"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            sx={{
              width: "300px",
              background: "white",
              borderRadius: "10px"
            }}
          />

          <Link
            to="/coupons/create"
            style={{
              textDecoration: "none"
            }}
          >

            <Button
              variant="contained"
              startIcon={<AddIcon />}
            >
              Create Coupon
            </Button>

          </Link>

        </Box>

        <div className="coupon-grid">

          {
            coupons
              .filter((coupon) =>
                coupon.couponTitle
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((coupon) => (

                <div
                  className="coupon-card"
                  key={coupon.id}
                >

                  <div className="coupon-icon">

                    🎟

                  </div>

                  <h2>

                    {coupon.couponCode}

                  </h2>

                  <h3>

                    {coupon.couponTitle}

                  </h3>

                  <p>

                    Discount ₹ {coupon.discountAmount}

                  </p>

                  <p>

                    Expiry :

                    {" "}

                    {coupon.expiryDate}

                  </p>

                  <div className="coupon-actions">

                    <Link
                      to={`/coupons/edit/${coupon.id}`}
                    >

                      <button>

                        Edit

                      </button>

                    </Link>

                    <button
                      onClick={() =>
                        handleDelete(coupon.id)
                      }
                    >

                      Delete

                    </button>

                  </div>

                </div>

              ))
          }

        </div>

      </Box>

    </Box>

  );

}

export default CouponList;