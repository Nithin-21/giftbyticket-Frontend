import Sidebar from "../components/Sidebar";

function UserDashboard() {

  return (

    <div
      style={{
        display: "flex",
        background: "#071226",
        minHeight: "100vh"
      }}
    >

      <Sidebar />

      <div
        style={{
          padding: "40px",
          color: "white"
        }}
      >

        <h1>
          Welcome User 👋
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px"
          }}
        >

          <div
            style={{
              background: "white",
              color: "black",
              padding: "30px",
              borderRadius: "20px",
              width: "200px"
            }}
          >
            <h2>0</h2>
            <p>My Participations</p>
          </div>

          <div
            style={{
              background: "white",
              color: "black",
              padding: "30px",
              borderRadius: "20px",
              width: "200px"
            }}
          >
            <h2>0</h2>
            <p>My Coupons</p>
          </div>

          <div
            style={{
              background: "white",
              color: "black",
              padding: "30px",
              borderRadius: "20px",
              width: "200px"
            }}
          >
            <h2>0</h2>
            <p>Winning Coupons</p>
          </div>

        </div>

      </div>

    </div>

  );

}

export default UserDashboard;