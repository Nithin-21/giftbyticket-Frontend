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

  return (

    <div className="coupon-layout">

      <Sidebar />

      <div className="coupon-container">

        <div className="coupon-header">

          <h1>🎟 My Coupons</h1>

          <p>
            Your rewards and discount coupons.
          </p>

        </div>

        <div className="coupon-grid">

          {

            coupons.map((coupon) => (

              <div
                className="coupon-card"
                key={coupon.id}
              >

                <div className="coupon-code">

                  {coupon.couponCode}

                </div>

                <h2>

                  {coupon.couponTitle}

                </h2>

                <p>

                  Discount ₹ {coupon.discountAmount}

                </p>

                <span>

                  Expiry :
                  {" "}
                  {coupon.expiryDate}

                </span>

                <button>

                  Copy Code

                </button>

              </div>

            ))

          }

        </div>

      </div>

    </div>

  );

}

export default MyCoupons;