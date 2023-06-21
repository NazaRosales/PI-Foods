import React from "react";
import image from "../../img/background-landing.png";
import "./module.LandingPage.css";

export default function LandingPage() {
  return (
    <div className="container">
      <div className="menu">
        <h1>PI Food - Nazareno Rosales</h1>
        <button>Go Home</button>
      </div>
      <img src={image} alt="Imagen de la landing page de comida" />
    </div>
  );
}
