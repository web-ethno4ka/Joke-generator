import React, { Component } from 'react';
import './Layout.css';
import RadioButton from '../component/Radiobutton/Radiobutton';

class Layout extends Component {
  state = {
    radio: [
      { name: 'radiobtn-1', id: 1, value: 'option-1', title: 'Process' },
      {
        name: 'radiobtn-1',
        id: 2,
        value: 'option-2',
        title: 'From categories',
      },
      { name: 'radiobtn-1', id: 3, value: 'option-3', title: 'Search' },
    ],
  };
  render() {
    const radio = this.state.radio;
    return (
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column col-8 my-5">
          <div className="mx-auto my-0 col-8">
            <h1>Hey!</h1>
            <h2>Let's try to find a joke for you:</h2>
            <div className="d-flex flex-column mt-3">
              <RadioButton
                name={radio[0].name}
                id={radio[0].id}
                value={radio[0].option}
                htmlFor={radio[0].id}
                title={radio[0].title}
              />

              <RadioButton
                name={radio[1].name}
                id={radio[1].id}
                value={radio[1].option}
                htmlFor={radio[1].id}
                title={radio[1].title}
              />

              <RadioButton
                name={radio[2].name}
                id={radio[2].id}
                value={radio[2].option}
                htmlFor={radio[2].id}
                title={radio[2].title}
              />

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
                  <label htmlFor="radio-1">ANIMAL</label>
                </div>
                <div className="radio-group">
                  <input id="radio-2" type="radio" name="radio" value="2" />
                  <label htmlFor="radio-2">CAREER</label>
                </div>
                <div className="radio-group">
                  <input id="radio-3" type="radio" name="radio" value="3" />
                  <label htmlFor="radio-3">CELEBRITY</label>
                </div>
                <div className="radio-group">
                  <input id="radio-4" type="radio" name="radio" value="4" />
                  <label htmlFor="radio-4">DEV</label>
                </div>
              </div>

              <div className="form-check mt-2">
                <input
                  className="form-check-input"
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
            <button type="button" className="btn mt-4">
              Get a joke
            </button>
            <div className="card mt-5 p-4">
              <i className="far fa-heart col-1 align-self-end"></i>
              <div className="card-body d-flex justify-content-between">
                <i className="far fa-comment-alt fa-inverse col-1"></i>
                <p className="col-11">
                  No one truly knows who's Chuck Norris' real father. No one is
                  biologically strong enough for this. He must've conceived
                  himself.
                </p>
              </div>
              <div className="categorie align-self-end">CELEBRITY</div>
            </div>
          </div>
        </div>
        <div className="sidebar d-flex flex-column col-3 pt-5">
          <div className="mx-auto my-0 col-10">
            <h3>Favourite</h3>
            <div className="card favourite-card mt-5 p-4">
              <i className="far fa-heart col-1 align-self-end"></i>
              <div className="card-body d-flex justify-content-between">
                <i className="far fa-comment-alt fa-inverse col-1 mr-1"></i>
                <p className="col-11">
                  No one truly knows who's Chuck Norris' real father. No one is
                  biologically strong enough for this. He must've conceived
                  himself.
                </p>
              </div>
            </div>
            <div className="card favourite-card mt-5 p-4">
              <i className="far fa-heart col-1 align-self-end"></i>
              <div className="card-body d-flex justify-content-between">
                <i className="far fa-comment-alt fa-inverse col-1 mr-1"></i>
                <p className="col-11">
                  No one truly knows who's Chuck Norris' real father. No one is
                  biologically strong enough for this. He must've conceived
                  himself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
