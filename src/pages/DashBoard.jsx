
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

function Dashboard() {

  return (

    <>
      <Navbar />

      <div className="dashboard-layout">

        <Sidebar />

        <div className="dashboard-container">

          <div className="dashboard-header">

            <h1>
              Welcome Back 👋
            </h1>

            <p>
              Manage campaigns, coupons and winners.
            </p>

          </div>

          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-icon">
                📢
              </div>

              <h2>
                5
              </h2>

              <p>
                Campaigns
              </p>

            </div>

            <div className="stat-card">

              <div className="stat-icon">
                🎟
              </div>

              <h2>
                20
              </h2>

              <p>
                Coupons
              </p>

            </div>

            <div className="stat-card">

              <div className="stat-icon">
                🏆
              </div>

              <h2>
                8
              </h2>

              <p>
                Winners
              </p>

            </div>

          </div>

          <div className="dashboard-section">

            <h2>
              Recent Campaigns
            </h2>

            <div className="campaign-list">

              <div className="campaign-card">
                🏍 Royal Enfield Giveaway
              </div>

              <div className="campaign-card">
                📱 iPhone 17 Giveaway
              </div>

              <div className="campaign-card">
                💻 MacBook Giveaway
              </div>

            </div>

          </div>

        </div>

      </div>

    </>

  );

}

export default Dashboard;