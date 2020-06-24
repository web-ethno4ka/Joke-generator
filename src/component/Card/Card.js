import React from 'react';
import './Card.css';

const Card = ({ joke, classes, onClick }) => {
  return (
    <div className={classes} key={joke.id}>
      <span className="col-1 align-self-end" onClick={() => onClick(joke)}>
        <i className="far fa-heart"></i>
      </span>
      <div className="card-body d-flex justify-content-between">
        <i className="far fa-comment-alt fa-inverse col-1"></i>
        <p className="col-11">{joke.value}</p>
      </div>
      {joke.categories.length ? (
        <div className="category align-self-end">{joke.categories}</div>
      ) : null}
    </div>
  );
};

export default Card;
