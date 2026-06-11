import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function Sidebar() {

  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  console.log("Role:", role);

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");

    navigate("/");

  };

  return (

    <Box
      sx={{
        width: 220,
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        p: 2
      }}
    >

      <Typography variant="h6">
        Menu
      </Typography>

      {/* ADMIN MENU */}

      {role?.toUpperCase() === "ADMIN" && (
        <>

          <Link to="/dashboard">
            <p>Dashboard</p>
          </Link>

          <Link to="/campaigns">
            <p>Campaigns</p>
          </Link>

          <Link to="/campaigns/create">
            <p>Create Campaign</p>
          </Link>

          <Link to="/coupons">
            <p>Coupons</p>
          </Link>

          <Link to="/coupons/create">
            <p>Create Coupon</p>
          </Link>

          <Link to="/winners">
            <p>Winners</p>
          </Link>

          <Link to="/winners/create">
            <p>Create Winner</p>
          </Link>

          <Link to="/user-coupons">
            <p>User Coupons</p>
          </Link>

          <Link to="/user-coupons/assign">
            <p>Assign Coupon</p>
          </Link>

        </>
      )}

      {/* USER MENU */}

      {role?.toUpperCase() === "USER" && (
        <>

          <Link to="/user-dashboard">
            <p>User Dashboard</p>
          </Link>

          <Link to="/browse-campaigns">
            <p>Browse Campaigns</p>
          </Link>

          <Link to="/my-coupons">
            <p>My Coupons</p>
          </Link>

          <Link to="/user-winners">
            <p>Winners</p>
          </Link>

          <Link to="/profile">
            <p>Profile</p>
          </Link>

        </>
      )}

      {/* LOGOUT */}

      <p
        onClick={handleLogout}
        style={{
          cursor: "pointer",
          color: "red"
        }}
      >
        Logout
      </p>

    </Box>

  );
}

export default Sidebar;