import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getUserDashboard } from "../services/dashboardService";
import "../styles/UserDashboard.css";

function UserDashboard() {

  const [stats, setStats] = useState({
    participationCount: 0,
    couponCount: 0,
    winnerCount: 0
  });

  useEffect(() => {

    loadDashboard();

  }, []);

  const loadDashboard = async () => {

    try {

      const userId = localStorage.getItem("userId");

      const response =
        await getUserDashboard(userId);

      setStats(response.data);

    }

    catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="user-dashboard-layout">

      <Sidebar />

      <div className="dashboard-container">

        <div className="dashboard-header">

          <h1>

            Welcome Back, User 👋

          </h1>

          <p>

            Track your campaigns, rewards and winning coupons.

          </p>

        </div>


        {/* Stats Cards */}

        <div className="stats-grid">

          <div className="dashboard-card pink-card">

            <div className="card-icon">
              🎟
            </div>

            <h1>
              {stats.participationCount}
            </h1>

            <p>
              Participations
            </p>

          </div>

          <div className="dashboard-card purple-card">

            <div className="card-icon">
              🎁
            </div>

            <h1>
              {stats.couponCount}
            </h1>

            <p>
              My Coupons
            </p>

          </div>

          <div className="dashboard-card orange-card">

            <div className="card-icon">
              🏆
            </div>

            <h1>
              {stats.winnerCount}
            </h1>

            <p>
              Winning Coupons
            </p>

          </div>

        </div>


        {/* Activity + Actions */}

        <div className="activity-wrapper">

          <div className="activity-section">

            <h2>

              Recent Activity

            </h2>

            <div className="activity-card">

              <div>
                ✅ Joined campaigns and collected rewards.
              </div>

              <span>
                2h ago
              </span>

            </div>

            <div className="activity-card">

              <div>
                🎁 Coupons assigned successfully.
              </div>

              <span>
                5h ago
              </span>

            </div>

            <div className="activity-card">

              <div>
                🏆 Winners will appear here after draw results.
              </div>

              <span>
                1d ago
              </span>

            </div>

            <div className="activity-card">

              <div>
                🎟 Keep participating to win exciting prizes.
              </div>

              <span>
                2d ago
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default UserDashboard;