import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getAllCampaigns } from "../services/campaignService";
import "../styles/UserCampaignList.css";

function UserCampaignList() {

  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {

    loadCampaigns();

  }, []);

  const loadCampaigns = async () => {

    try {

      const response = await getAllCampaigns();

      setCampaigns(response.data);

    }

    catch (error) {

      console.error(error);

    }

  };

  const handleParticipate = (id) => {

    alert(`Participating in Campaign ${id}`);

  };

  return (

    <div className="campaign-layout">

      <Sidebar />

      <div className="campaign-container">

        <div className="campaign-header">

          <h1>🎉 Available Campaigns</h1>

          <p>
            Participate and win exciting rewards.
          </p>

        </div>

        <div className="campaign-grid">

          {

            campaigns.map((campaign) => (

              <div
                className="campaign-card"
                key={campaign.id}
              >

                <div className="campaign-icon">

                  🎁

                </div>

                <h2>

                  {campaign.campaignName}

                </h2>

                <p className="campaign-description">

                  {campaign.description}

                </p>

                <div className="campaign-info">

                  <div>

                    💰 ₹{campaign.entryFee}

                  </div>

                  <div
                    className={
                      campaign.status === "ACTIVE"
                        ? "status active"
                        : "status"
                    }
                  >

                    📌 {campaign.status}

                  </div>

                </div>

                <button
                  className="participate-btn"
                  onClick={() =>
                    handleParticipate(campaign.id)
                  }
                >

                  Participate

                </button>

              </div>

            ))

          }

        </div>

      </div>

    </div>

  );

}

export default UserCampaignList;