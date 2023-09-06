import React from "react";
import "./TextInput.css";

const TextInput = ({ value, setValue, label, required }) => {
  /**
   * State that holds values
   *  touched
   *  error
   *  active
   * Build css classes based the above
   */
  const [state, setState] = React.useState({
    touched: false,
    active: false,
    error: undefined,
  });

  const error = value === 'error' ? 'error' : ''

  const derivedClass = `inputField ${state.active && 'active'} ${error}`

  const labelClass = `label ${value.length > 0 && 'top'}`
  const errorClass = error ? 'errorClass show' : 'errorClass'
  return (
    <div className="inputContainer">
      <p className={labelClass}>{label}</p>
      <div className={derivedClass}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setState({ ...state, active: true, touched: true })}
          onBlur={() => setState({ ...state, active: false, touched: true })}
          placeholder={label}
        />
      </div>
      <p className={errorClass}>Invalid input</p>
    </div>
  );
};

export default TextInput;
