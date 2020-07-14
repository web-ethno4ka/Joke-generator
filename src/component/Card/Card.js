import React, { useState } from 'react';
import './Card.css';

const Card = ({ joke, classes, toggleFavourite, isFavourite }) => {
  // let isLiked = () => {
  //   return localStorage.getItem(joke.id);
  // };

  let icon;
  if (isFavourite(joke)) {
    icon = 'fas fa-heart';
  } else {
    icon = 'far fa-heart';
  }

  return (
    <div className={classes} key={joke.id}>
      <span className="col-1 align-self-end">
        <i
          className={icon}
          onClick={() => {
            toggleFavourite(joke);
          }}></i>
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
