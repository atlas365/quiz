import React from "react";
import "./SecondaryButton.css";

const SecondaryButton = ({ label, handleClick }) => {

  const onMouseDown = (e) => {
    e.target.style.opacity = 0.5;
  };
  const onMouseUp = (e) => {
    e.target.style.opacity = 1;
  };

  return (
    <button
      className="buttonStyle"
      onClick={handleClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
