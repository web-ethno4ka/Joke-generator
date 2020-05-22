import React from 'react';
import './Layout.css';

const Layout = () => {
  return (
    <div className="d-flex flex-row justify-content-between pl-5">
      <div className="d-flex flex-column col-5 m-5 ">
        <h1>Hey!</h1>
        <h2>Let's try to find a joke for you:</h2>
        <div className="d-flex flex-column mt-3">
          <div class="form-check mt-2">
            <input
              className="form-check-input"
              type="radio"
              name="radiobtn"
              id="radio-btn-1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="radio-btn-1">
              Random
            </label>
          </div>
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="radio"
              name="radiobtn"
              id="radio-btn-2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="radio-btn-2">
              From Categories
            </label>
          </div>
          <div className="joke-categories">
            <div className="radio-group">
              <input id="radio-1" type="radio" name="radio" value="1" />
              <label for="radio-1">ANIMAL</label>
            </div>
            <div className="radio-group">
              <input id="radio-2" type="radio" name="radio" value="2" />
              <label for="radio-2">CAREER</label>
            </div>
            <div className="radio-group">
              <input id="radio-3" type="radio" name="radio" value="3" />
              <label for="radio-3">CELEBRITY</label>
            </div>
            <div className="radio-group">
              <input id="radio-4" type="radio" name="radio" value="4" />
              <label for="radio-4">DEV</label>
            </div>
          </div>
          <div className="form-check mt-2">
            <input
              class="form-check-input"
              type="radio"
              name="radiobtn"
              id="radio-btn-3"
              value="option3"
            />
            <label className="form-check-label" htmlFor="radio-btn-3">
              Search
            </label>
          </div>
          <input
            className="mt-2 custom"
            type="text"
            placeholder="Free text search..."
          />
        </div>
        <button type="button" class="btn mt-4">
          Get a joke
        </button>
        <div className="card mt-5 p-4">
          <i className="far fa-heart col-1 align-self-end"></i>
          <div className="card-body d-flex justify-content-between">
            <i class="far fa-comment-alt fa-inverse col-1"></i>
            <p className="col-11">
              No one truly knows who's Chuck Norris' real father. No one is
              biologically strong enough for this. He must've conceived himself.
            </p>
          </div>
          <div className="categorie align-self-end">CELEBRITY</div>
        </div>
      </div>
      <div className="sidebar d-flex flex-column col-4 pt-5">
        <h2>Favourite</h2>
        <div className="card favourite-card mt-5 p-4">
          <i className="far fa-heart col-1 align-self-end"></i>
          <div className="card-body d-flex justify-content-between">
            <i class="far fa-comment-alt fa-inverse col-1 mr-1"></i>
            <p className="col-11">
              No one truly knows who's Chuck Norris' real father. No one is
              biologically strong enough for this. He must've conceived himself.
            </p>
          </div>
        </div>
        <div className="card favourite-card mt-5 p-4">
          <i className="far fa-heart col-1 align-self-end"></i>
          <div className="card-body d-flex justify-content-between">
            <i class="far fa-comment-alt fa-inverse col-1 mr-1"></i>
            <p className="col-11">
              No one truly knows who's Chuck Norris' real father. No one is
              biologically strong enough for this. He must've conceived himself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
