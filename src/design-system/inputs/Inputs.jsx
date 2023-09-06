import React from "react";
import TextInput from "./TextInput";
import "./Inputs.css"

const styles = {
  container: {
    border: "1px black solid",
    width: "50%",
    paddingLeft: 32,
    paddingTop: 32,
    paddingBottom: 32,
  },
};

const Inputs = () => {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div style={styles.container} className="inputContainer">
      <TextInput
        value={inputValue}
        setValue={setInputValue}
        label="Text Input"
      />
    </div>
  );
};

export default Inputs;
