import React from 'react';
import './Category.css';

const Category = (props) => {
  return (
    <div className="radio-group">
      <input
        id={props.id}
        type="radio"
        name="radiobtn-2"
        value={props.option}
      />
      <label htmlFor={props.id}>{props.title}</label>
    </div>
  );
};

export default Category;
