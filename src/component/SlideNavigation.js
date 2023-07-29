import React, { useContext } from 'react';
import { SlideContext } from '../context/SlideContext';
import { Link } from 'react-router-dom';
import '../styles.css';

const SlideNavigation = () => {
  const { activeLevel, slideIndex, apiData, isLevelFinished, handleNextSlide, handlePrevSlide, handleFinishLevel } = useContext(SlideContext);

  if (!apiData) {
    return null;
  }

  const currentLevel = apiData.level.find(level => level.id === activeLevel);
  const totalSlides = currentLevel.slide.length;
  const isLastSlide = slideIndex === totalSlides - 1;

  const handleNext = () => {
    if (isLastSlide) {
      handleFinishLevel();
    } else {
      handleNextSlide();
    }
  };

  return (
    <div className="slide-navigation">
      <button onClick={handlePrevSlide} disabled={slideIndex === 0}>
        Back
      </button>
      <button onClick={handleNext} disabled={isLevelFinished && isLastSlide}>
        {isLastSlide && isLevelFinished ? 'Next Level' : 'Next'}
      </button>
    </div>
  );
};

export default SlideNavigation;
