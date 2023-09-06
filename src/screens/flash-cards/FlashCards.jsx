import React from "react";
import PrimaryButton from "../../design-system/buttons/PrimaryButton";

const FlashCards = () => {
  const onClickPrimary = () => {
    console.log("Primary");
  };
  return (
    <>
      <h1>Flash cards page</h1>
      <PrimaryButton onClick={onClickPrimary} label="Primary" />
    </>
  );
};

export default FlashCards;
