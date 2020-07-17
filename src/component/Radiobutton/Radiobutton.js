import React from 'react';
import './Radiobutton.css';

const RadioButton = ({ value, onChange }) => {
  return (
    <div className="form-check mt-2">
      <input
        className="form-check-input"
        type="radio"
        name="radiobtn"
        id={value}
        value={value}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={value}>
        {value}
      </label>
    </div>
  );
};

export default RadioButton;
