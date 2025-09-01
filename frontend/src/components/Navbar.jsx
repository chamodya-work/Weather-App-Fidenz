import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Navbar = () => {
  const { logout } = useAuth0();
  const location = useLocation();
  const navigate = useNavigate();
  const isDashboard = location.pathname === "/";

  return (
    <div className="navbar">
      {!isDashboard && (
        <button className="back-button" onClick={() => navigate(-1)}>
          <IoArrowBack />
        </button>
      )}
      <div className="title">☁️ Weather App</div>
      {isDashboard && (
        <>
          <input className="search-bar" placeholder="Enter a city" disabled />{" "}
          {/* Non-functional */}
          <button className="add-button" disabled>
            Add City
          </button>{" "}
          {/* Non-functional */}
        </>
      )}
      <button
        className="logout-button"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </div>
  );
};

export default Navbar;
