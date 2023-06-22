import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import CreateRecipe from "./components/createRecipe/CreateRecipe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/create-recipe" element={<CreateRecipe />}/>

    </Routes>
  );
}

export default App;
