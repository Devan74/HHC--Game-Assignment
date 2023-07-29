import React from 'react';

const FinishButton = ({ onClick }) => {
  return (
    <button className="finish-button" onClick={onClick}>
      Finish
    </button>
  );
};

export default FinishButton;
