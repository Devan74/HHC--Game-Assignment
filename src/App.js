import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SlideProvider } from "./context/SlideContext";

import Slide from "./component/Slide";
import { useNavigate } from "react-router-dom";
import CompanyImage from "./aasets/game.png";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();
  const handleStartSlide = () => {
    //(navigate back to the home page)
    navigate("/slides");
  };
  return (
    <>
      <div className="container-sm">
        <h1>Welcome to the Home Page!</h1>
        <img src={CompanyImage} alt="background" />
      </div>

      <button className="start-button" onClick={handleStartSlide}>
        Start
      </button>
    </>
  );
};

const App = () => {
  return (
    <SlideProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slides" element={<Slide />} />
        </Routes>
       
      </Router>
    </SlideProvider>
  );
};

export default App;
