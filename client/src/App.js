import "./App.css";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";
import CreateRecipe from "./components/createRecipe/CreateRecipe.jsx";
import Detail from "./components/detail/Detail";
import NavBar from "./components/NavBar/navBar.jsx";
import NotFound from "./components/NotFound/notFound";

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      <div>{pathname !== "/" && <NavBar />}</div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/create-recipe" element={<CreateRecipe />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
