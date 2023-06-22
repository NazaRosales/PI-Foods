import React from "react";
import image from "../../img/background-landing.png";
import "./module.LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="container">
      <div className="menu">
        <h1>PI Food - Nazareno Rosales</h1>
        <Link to='/home'>
          <button> Go Home</button>
        </Link>
      </div>
      <img className = "backImage" src={image} alt="Imagen de la landing page de comida" />
    </div>
  );
}
