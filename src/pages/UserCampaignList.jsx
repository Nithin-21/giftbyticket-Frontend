import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getAllCampaigns } from "../services/campaignService";
import { createEntry } from "../services/giveawayEntryService";
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

  const handleParticipate = async (campaignId) => {

    try {

      const userId =
        localStorage.getItem("userId");

      const response =
        await createEntry({
          userId,
          campaignId
        });

      alert(

`🎉 Successfully Registered!

Campaign : ${response.data.campaignName}

Coupon Assigned : ${response.data.couponTitle}

Giveaway Code : ${response.data.giveawayCode}`

      );

    }

    catch (error) {

      console.error(error);

      if (
        error.response &&
        error.response.data
      ) {

        if (
          typeof error.response.data === "string"
        ) {

          alert(error.response.data);

        }

        else {

          alert(
            error.response.data.message ||
            "You have already participated in this campaign."
          );

        }

      }

      else {

        alert(
          "Something went wrong. Please try again."
        );

      }

    }

  };

  return (

    <div className="campaign-layout">

      <Sidebar />

      <div className="campaign-container">

        <div className="campaign-header">

          <h1>
            🎉 Available Campaigns
          </h1>

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
                    handleParticipate(
                      campaign.id
                    )
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