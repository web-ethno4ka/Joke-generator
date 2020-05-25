import React from 'react';
import './Radiobutton.css';

const RadioButton = (props) => {
  return (
    <div className="form-check mt-2">
      <input
        className="form-check-input"
        type="radio"
        name="radiobtn"
        id={props.id}
        value={props.option}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.title}
      </label>
    </div>
  );
};

export default RadioButton;
