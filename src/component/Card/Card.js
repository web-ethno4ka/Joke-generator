import React from 'react';
import './Card.css';

const Card = ({ joke, classes }) => {
  return (
    <div className={classes} key={joke.id}>
      <i className="far fa-heart col-1 align-self-end"></i>
      <div className="card-body d-flex justify-content-between">
        <i className="far fa-comment-alt fa-inverse col-1"></i>
        <p className="col-11">{joke.value}</p>
      </div>

      <div className="category align-self-end">{joke.categories}</div>
    </div>
  );
};

export default Card;
