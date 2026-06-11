import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  TablePagination,
  Button
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import {
  getAllCoupons,
  deleteCoupon
} from "../services/couponService";

function CouponList() {

  const [coupons, setCoupons] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    loadCoupons();
  }, []);

  const loadCoupons = async () => {

    try {

      const response = await getAllCoupons();

      setCoupons(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  const handleDelete = async (id) => {

    try {

      await deleteCoupon(id);

      alert("Coupon Deleted Successfully");

      loadCoupons();

    } catch (error) {

      console.error(error);

      alert("Delete Failed");

    }

  };

  return (
    <>
      <Navbar />

      <Box sx={{ display: "flex" }}>

        <Sidebar />

        <Box sx={{ flexGrow: 1, p: 3 }}>

          <Typography variant="h4" gutterBottom>
            Coupon List
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 3
            }}
          >

            <TextField
              label="Search Coupon"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ width: "300px" }}
            />

            <Link
              to="/coupons/create"
              style={{ textDecoration: "none" }}
            >

              <Button
                variant="contained"
                startIcon={<AddIcon />}
              >
                Create Coupon
              </Button>

            </Link>

          </Box>

          <TableContainer component={Paper}>

            <Table>

              <TableHead>

                <TableRow>

                  <TableCell>ID</TableCell>
                  <TableCell>Coupon Code</TableCell>
                  <TableCell>Coupon Title</TableCell>
                  <TableCell>Discount Amount</TableCell>
                  <TableCell>Expiry Date</TableCell>
                  <TableCell>Actions</TableCell>

                </TableRow>

              </TableHead>

              <TableBody>

                {coupons
                  .filter((coupon) =>
                    coupon.couponTitle
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  )
                  .slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                  .map((coupon) => (

                    <TableRow key={coupon.id}>

                      <TableCell>{coupon.id}</TableCell>

                      <TableCell>
                        {coupon.couponCode}
                      </TableCell>

                      <TableCell>
                        {coupon.couponTitle}
                      </TableCell>

                      <TableCell>
                        ₹ {coupon.discountAmount}
                      </TableCell>

                      <TableCell>
                        {coupon.expiryDate}
                      </TableCell>

                      <TableCell>

                        <Link
                          to={`/coupons/edit/${coupon.id}`}
                        >

                          <IconButton color="primary">

                            <EditIcon />

                          </IconButton>

                        </Link>

                        <IconButton
                          color="error"
                          onClick={() =>
                            handleDelete(coupon.id)
                          }
                        >

                          <DeleteIcon />

                        </IconButton>

                      </TableCell>

                    </TableRow>

                  ))}

              </TableBody>

            </Table>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={
                coupons.filter((coupon) =>
                  coupon.couponTitle
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ).length
              }
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(event, newPage) =>
                setPage(newPage)
              }
              onRowsPerPageChange={(event) => {

                setRowsPerPage(
                  parseInt(event.target.value, 10)
                );

                setPage(0);

              }}
            />

          </TableContainer>

        </Box>

      </Box>

    </>
  );
}

export default CouponList;