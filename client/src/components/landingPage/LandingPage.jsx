import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="menu">
      <h1 className="titleLanding">Hungry? Get started</h1>
      <Link to="/home">
        <button className="btnLanding"> Go Home</button>
      </Link>
    </div>
  );
}
