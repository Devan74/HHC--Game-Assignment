import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SlideContext } from '../context/SlideContext';
import '../styles.css';

const MenuModal = () => {
  const { isLevelFinished, handleCloseModal, handleFinishLevel } = useContext(SlideContext);

  const handleExitSlide = () => {
    //  to navigate back to the home page (e.g., using Link)
    return <Link  to="/">Exit</Link>;
  };

  const handleNextLevel = () => {
    // Handle logic to proceed to the next level (e.g., using setActiveLevel)
    // For this example, we'll call the handleFinishLevel function to proceed
    // to the next level if the current level is finished.
    if (isLevelFinished) {
      handleFinishLevel();
    }
  };

  return (
    <div className={`menu-modal ${isLevelFinished ? 'open' : ''}`}>
      <div className="modal-content">
        {handleExitSlide()}
        <button onClick={handleCloseModal}>Close</button>
        <button onClick={handleNextLevel} disabled={!isLevelFinished} className="finish-button">
          {isLevelFinished ? 'Next Level' : 'Continue'}
        </button>
      </div>
    </div>
  );
};

export default MenuModal;
