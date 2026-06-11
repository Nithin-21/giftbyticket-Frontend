import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
return ( <div className="home">

```
  <nav className="navbar">

    <div className="logo">
      🎁 GiftByTicket
    </div>

    <div className="nav-links">

      <a href="#how-it-works">
        How It Works
      </a>

      <a href="#campaigns">
        Campaigns
      </a>

      <Link to="/login">
        Login
      </Link>

    </div>

  </nav>

  <section className="hero">

    <div className="hero-content">

      <span className="badge">
        Every Entry Wins Something
      </span>

      <h1>
        Win Rewards, Coupons & Amazing Prizes
      </h1>

      <p>
        Participate in giveaway campaigns,
        unlock instant coupons and stand a chance
        to win exciting rewards.
      </p>

      <div className="hero-buttons">

        <Link
          to="/register"
          className="primary-btn"
        >
          Join Free
        </Link>

        <a
          href="#campaigns"
          className="secondary-btn"
        >
          Explore Campaigns
        </a>

      </div>

    </div>

  </section>

  <section
    id="how-it-works"
    className="how-section"
  >

    <h2>How GiftByTicket Works</h2>

    <div className="steps">

      <div className="step-card">
        <div className="step-number">1</div>
        <h3>Join Campaign</h3>
        <p>Select an active giveaway campaign.</p>
      </div>

      <div className="step-card">
        <div className="step-number">2</div>
        <h3>Get Coupons</h3>
        <p>Receive rewards and coupons instantly.</p>
      </div>

      <div className="step-card">
        <div className="step-number">3</div>
        <h3>Get Entry Ticket</h3>
        <p>Your giveaway entry is generated automatically.</p>
      </div>

      <div className="step-card">
        <div className="step-number">4</div>
        <h3>Win Rewards</h3>
        <p>Winners are announced transparently.</p>
      </div>

    </div>

  </section>

  <section
    id="campaigns"
    className="campaigns"
  >

    <h2>Featured Campaigns</h2>

    <div className="campaign-grid">

      <div className="campaign-card">

        <h3>🏍 Win Royal Enfield Classic 350</h3>

        <ul>
          <li>₹500 Helmet Coupon</li>
          <li>₹1000 Service Voucher</li>
          <li>₹300 Accessories Coupon</li>
        </ul>

        <button>
          Participate
        </button>

      </div>

      <div className="campaign-card">

        <h3>📱 Win iPhone 17</h3>

        <ul>
          <li>Electronics Discounts</li>
          <li>Partner Coupons</li>
          <li>Special Offers</li>
        </ul>

        <button>
          Participate
        </button>

      </div>

    </div>

  </section>

  <section className="benefits">

    <h2>Why People Love GiftByTicket</h2>

    <div className="benefit-grid">

      <div className="benefit-card">
        🎁 Guaranteed Coupons
      </div>

      <div className="benefit-card">
        🏆 Exciting Giveaways
      </div>

      <div className="benefit-card">
        ⚡ Easy Participation
      </div>

      <div className="benefit-card">
        🔒 Transparent Winners
      </div>

    </div>

  </section>

  <section className="cta-section">

    <div className="user-box">

      <h3>Join As User</h3>

      <p>
        Participate in campaigns and win rewards.
      </p>

      <Link
        to="/register"
        className="primary-btn"
      >
        Register
      </Link>

    </div>

    <div className="brand-box">

      <h3>Partner As Brand</h3>

      <p>
        Launch promotional campaigns and
        generate quality leads.
      </p>

      <Link
        to="/brand-enquiry"
        className="secondary-btn"
      >
        Contact Us
      </Link>

    </div>

  </section>

</div>

);
}

export default Home;
