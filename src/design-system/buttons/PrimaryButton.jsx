import React from "react";
import { palette } from "../colors/palette";


const styles = {
  buttonStyle: {
    padding: "10px 25px",
    fontSize: 20,
    borderRadius: 6,
    borderStyle: "none",
    color: palette.white,
    backgroundColor: palette.darkBlue,
  },
};

const PrimaryButton = ({ label, handleClick }) => {
  const onHoverIn = (e) => {
    e.target.style.opacity = 0.8
  };
  const onHoverOut = (e) => {
    e.target.style.opacity = 1
  };
  const onMouseDown = (e) => {
    e.target.style.opacity = 0.6
  }
  const onMouseUp = (e) => {
    e.target.style.opacity = 0.8
  }

  return (
    <button
      className="btn btn-default"
      style={styles.buttonStyle}
      onClick={handleClick}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
