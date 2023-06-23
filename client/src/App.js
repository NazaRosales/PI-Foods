import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import CreateRecipe from "./components/createRecipe/CreateRecipe";
import Detail from "./components/detail/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/create-recipe" element={<CreateRecipe />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
