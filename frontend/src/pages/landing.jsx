import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

function LandingPage() {
  const router = useNavigate();
  return (
    <div className="ladingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Video call</h2>
        </div>
        <div className="navlist">
          <p
            onClick={() => {
              router("/qwe23wa");
            }}
          >
            Join as Guest
          </p>
          <p
            onClick={() => {
              router("/auth");
            }}
          >
            Register
          </p>
          <div
            role="button"
            onClick={() => {
              router("/auth");
            }}
          >
            <p>Login</p>
          </div>
        </div>
      </nav>
      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "orange" }}>Connect</span> with your Loves one
          </h1>
          <p>Cover a distance by video call</p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="" className="mobileimg" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
