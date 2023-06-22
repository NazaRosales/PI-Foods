import React from "react";
import "./module.LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="menu">
        <h1>Hungry? Get started</h1>
        <Link to='/home'>
          <button> Go Home</button>
        </Link>
      </div>
    </div>
  );
}
