import React from "react"
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const styles = {
  container: {
    border: "1px black solid",
    width: "50%",
    paddingLeft: 32,
    paddingTop: 32,
    paddingBottom: 32,
  },
};

const Buttons = () => {
  return (
    <div style={styles.container}>
      <div>
        <PrimaryButton label="Primary" />
      </div>
      <div style={{ marginTop: 10 }}>
        <SecondaryButton label="Secondary" />
      </div>
    </div>
  );
};

export default Buttons;
