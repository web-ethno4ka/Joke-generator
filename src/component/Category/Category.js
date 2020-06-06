import React from 'react';
import './Category.css';

const Category = (props) => {
  return (
    <div className="radio-group">
      <input
        id={props.id}
        type="radio"
        name="radiobtn-2"
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>{props.value}</label>
    </div>
  );
};

export default Category;
