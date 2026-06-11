import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/DashBoard";
import CreateCampaign from "./pages/CreateCampaign";
import CampaignList from "./pages/CampaignList";
import EditCampaign from "./pages/EditCampaign";
import CouponList from "./pages/CouponList";
import CreateCoupon from "./pages/CreateCoupon";
import EditCoupon from "./pages/EditCoupon";
import WinnerList from "./pages/WinnerList";
import CreateWinner from "./pages/CreateWinner";
import EditWinner from "./pages/EditWinner";
import AssignCoupon from "./pages/AssignCoupon";
import UserCouponList from "./pages/UserCouponList";
import UserDashboard from "./pages/UserDashboard";
import UserCampaignList from "./pages/UserCampaignList";
import MyCoupons from "./pages/MyCoupons";
import UserWinners from "./pages/UserWinners";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campaigns/create" element={<CreateCampaign />} />
        <Route path="/campaigns" element={<CampaignList />} />
        <Route path="/campaigns/edit/:id" element={<EditCampaign />} />
        <Route path="/coupons" element={<CouponList />} />
        <Route path="/coupons/create" element={<CreateCoupon />} />
        <Route path="/coupons/edit/:id" element={<EditCoupon />} />
        <Route path="/winners" element={<WinnerList />} />
        <Route path="/winners/create" element={<CreateWinner />} />
        <Route path="/winners/edit/:id" element={<EditWinner />} />
        <Route path="/user-coupons" element={<UserCouponList />} />
        <Route path="/user-coupons/assign" element={<AssignCoupon />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/browse-campaigns" element={<UserCampaignList />} />
        <Route path="/my-coupons" element={<MyCoupons />} />
        <Route
          path="/user-winners"
          element={<UserWinners />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;