import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getAllWinners } from "../services/winnerService";
import "../styles/UserWinners.css";

function UserWinners() {

  const [winners, setWinners] = useState([]);

  useEffect(() => {

    loadWinners();

  }, []);

  const loadWinners = async () => {

    try {

      const response = await getAllWinners();

      setWinners(response.data);

    }

    catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="winner-layout">

      <Sidebar />

      <div className="winner-container">

        <div className="winner-header">

          <h1>
            🏆 Winners Hall
          </h1>

          <p>
            Celebrate our lucky winners and exciting rewards.
          </p>

        </div>

        <div className="winner-grid">

          {

            winners.map((winner) => (

              <div
                className="winner-card"
                key={winner.id}
              >

                <div className="winner-icon">

                  🏆

                </div>

                <h2>

                  User #{winner.userId}

                </h2>

                <p>

                  🎁 Campaign #{winner.campaignId}

                </p>

                <p>

                  📅 {winner.winnerDate}

                </p>

                <div className="winner-badge">

                  ★ WINNER ★

                </div>

              </div>

            ))

          }

        </div>

      </div>

    </div>

  );

}

export default UserWinners;