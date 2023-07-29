import React, { useContext } from "react";
import { SlideContext } from "../context/SlideContext";
import SlideNavigation from "./SlideNavigation";
import MenuModal from "./MenuModal";
import "../styles.css";

const Slide = () => {
  const { apiData, activeLevel, slideIndex } = useContext(SlideContext);

  if (!apiData) {
    return <div>Loading...</div>;
  }

  const currentLevel = apiData.level.find((level) => level.id === activeLevel);
  const currentSlide = currentLevel.slide[slideIndex];

  return (
    <div className="slide-page">
      <h1>Slide {slideIndex + 1}</h1>
      <div className="slide">
        <img
          className="slide-image"
          src={currentSlide.src}
          width={700}
          height={400}
          alt={`Slide ${slideIndex + 1}`}
        />
        <SlideNavigation />
        <MenuModal />
      </div>
    </div>
  );
};

export default Slide;
