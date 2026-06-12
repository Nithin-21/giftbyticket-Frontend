import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getCouponsByUser } from "../services/userCouponService";
import "../styles/MyCoupons.css";

function MyCoupons() {

  const [coupons, setCoupons] = useState([]);

  useEffect(() => {

    loadCoupons();

  }, []);

  const loadCoupons = async () => {

    try {

      const userId = localStorage.getItem("userId");

      const response = await getCouponsByUser(userId);

      console.log(response.data);

      setCoupons(response.data);

    }

    catch (error) {

      console.error(error);

    }

  };

  const copyCode = (code) => {

    navigator.clipboard.writeText(code);

    alert("Coupon code copied successfully!");

  };

  return (

    <div className="coupon-layout">

      <Sidebar />

      <div className="coupon-container">

        <div className="coupon-header">

          <h1>
            🎟 My Coupons
          </h1>

          <p>
            Your rewards and discount coupons.
          </p>

        </div>

        <div className="coupon-grid">

          {

            coupons.length > 0 ?

              coupons.map((coupon) => (

                <div
                  className="coupon-card"
                  key={coupon.id}
                >

                  <div className="coupon-code">

                    🎟 {coupon.couponCode}

                  </div>

                  <h2>

                    {coupon.couponTitle}

                  </h2>

                  <div className="coupon-details">

                    <p>

                      💰 Discount ₹ {coupon.discountAmount}

                    </p>

                    <p>

                      📅 Expiry : {coupon.expiryDate}

                    </p>

                  </div>

                  <button
                    className="copy-btn"
                    onClick={() =>
                      copyCode(coupon.couponCode)
                    }
                  >

                    📋 Copy Code

                  </button>

                </div>

              ))

              :

              <div className="empty-coupons">

                <h2>
                  No Coupons Available
                </h2>

                <p>
                  Participate in campaigns to earn coupons.
                </p>

              </div>

          }

        </div>

      </div>

    </div>

  );

}

export default MyCoupons;