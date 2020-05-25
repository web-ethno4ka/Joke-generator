import React from 'react';
import './Radiobutton.css';

const radioButton = (props) => {
  return (
    <div className="form-check mt-2">
      <input
        className="form-check-input"
        type="radio"
        name={props.name}
        id={props.id}
        value={props.option}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.title}
      </label>
    </div>
  );
};

export default radioButton;
