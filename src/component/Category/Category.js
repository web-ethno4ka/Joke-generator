import React from 'react';
import './Category.css';

const Category = ({ value, onChange }) => {
  return (
    <div className="radio-group">
      <input
        className="radio-group__input"
        type="radio"
        name="radiobtn-2"
        id={value}
        value={value}
        onChange={onChange}
      />
      <label className="radio-group__label" htmlFor={value}>
        {value}
      </label>
    </div>
  );
};

export default Category;
