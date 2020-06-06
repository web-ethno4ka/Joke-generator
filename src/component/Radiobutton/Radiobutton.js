import React from 'react';
import './Radiobutton.css';

const RadioButton = (props) => {
  return (
    <div className="form-check mt-2">
      <input
        onChange={props.onChange}
        className="form-check-input"
        type="radio"
        name="radiobtn"
        id={props.id}
        value={props.value}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.value}
      </label>
    </div>
  );
};

export default RadioButton;
