import React, { createContext, useState, useEffect } from 'react';

const SlideContext = createContext();

const SlideProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);
  const [activeLevel, setActiveLevel] = useState('level1');
  const [slideIndex, setSlideIndex] = useState(0);
  const [isLevelFinished, setIsLevelFinished] = useState(false);

  // Simulate fetching data from the API
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/ebe-nezer/82d59bea50b124179112f6ca4aa28b62/raw/090e0a8e4e9dee35645c6e3de063e6c1886e4985/hhc-assessment.json');
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchApiData();
  }, []);

  // Function to handle navigating to the next slide
  const handleNextSlide = () => {
    setSlideIndex(prevIndex => prevIndex + 1);
  };

  // Function to handle navigating to the previous slide
  const handlePrevSlide = () => {
    setSlideIndex(prevIndex => prevIndex - 1);
  };

  // Function to handle finishing the current level
  const handleFinishLevel = () => {
    setIsLevelFinished(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsLevelFinished(false);
  };

  return (
    <SlideContext.Provider
      value={{
        apiData,
        activeLevel,
        slideIndex,
        isLevelFinished,
        setActiveLevel,
        handleNextSlide,
        handlePrevSlide,
        handleFinishLevel,
        handleCloseModal,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
};

export { SlideContext, SlideProvider };
