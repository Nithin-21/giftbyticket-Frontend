import { Link, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {

  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  console.log("Role = ", role);

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");

    navigate("/");

  };

  return (

    <div className="sidebar">

      <div className="sidebar-logo">
      
          <h1>
              🎁
          </h1>
      
          <h2>
              GiftByTicket
          </h2>
      
      </div>

      <div className="sidebar-links">

        {role?.toUpperCase() === "ADMIN" && (
          <>

            <Link className="sidebar-item" to="/dashboard">
              🏠 Dashboard
            </Link>

            <Link className="sidebar-item" to="/campaigns">
              📢 Campaigns
            </Link>

            <Link className="sidebar-item" to="/campaigns/create">
              ➕ Create Campaign
            </Link>

            <Link className="sidebar-item" to="/coupons">
              🎟 Coupons
            </Link>

            <Link className="sidebar-item" to="/coupons/create">
              ➕ Create Coupon
            </Link>

            <Link className="sidebar-item" to="/winners">
              🏆 Winners
            </Link>

            <Link className="sidebar-item" to="/winners/create">
              ➕ Create Winner
            </Link>

            <Link className="sidebar-item" to="/user-coupons">
              🎫 User Coupons
            </Link>

            <Link className="sidebar-item" to="/user-coupons/assign">
              🎁 Assign Coupon
            </Link>

          </>
        )}

        {role?.toUpperCase() === "USER" && (
          <>

            <Link className="sidebar-item" to="/user-dashboard">
              🏠 Dashboard
            </Link>

            <Link className="sidebar-item" to="/browse-campaigns">
              📢 Campaigns
            </Link>

            <Link className="sidebar-item" to="/my-coupons">
              🎟 My Coupons
            </Link>

            <Link className="sidebar-item" to="/user-winners">
              🏆 Winners
            </Link>

            <Link className="sidebar-item" to="/profile">
              👤 Profile
            </Link>

          </>
        )}

        <div
          className="sidebar-item logout"
          onClick={handleLogout}
        >

          🚪 Logout

        </div>

      </div>

    </div>

  );

}

export default Sidebar;