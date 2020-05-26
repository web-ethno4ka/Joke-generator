import React, { Component } from 'react';
import './Layout.css';
import RadioButton from '../component/Radiobutton/Radiobutton';
import Category from '../component/Category/Category';
import Card from '../component/Card/Card';

class Layout extends Component {
  state = {
    radio: [
      { id: 1, value: 'option-1', title: 'Random' },
      { id: 2, value: 'option-2', title: 'From categories' },
      { id: 3, value: 'option-3', title: 'Search' },
    ],

    category: [
      { id: 4, value: 'option-4', title: 'ANIMAL' },
      { id: 5, value: 'option-5', title: 'CAREER' },
      { id: 6, value: 'option-6', title: 'CELEBRITY' },
      { id: 7, value: 'option-7', title: 'DEV' },
    ],

    quote: [{ title: 'ANIMAL' }, { title: 'CELEBRITY' }],
  };
  render() {
    const radio = this.state.radio;
    const category = this.state.category;
    const quote = this.state.quote;

    return (
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column col-8 my-5">
          <div className="mx-auto my-0 col-8">
            <h1>Hey!</h1>
            <h2>Let's try to find a joke for you:</h2>
            <div className="d-flex flex-column mt-3">
              <RadioButton
                id={radio[0].id}
                value={radio[0].option}
                title={radio[0].title}
              />
              <RadioButton
                id={radio[1].id}
                value={radio[1].option}
                title={radio[1].title}
              />

              <div className="joke-categories">
                <Category
                  id={category[0].id}
                  value={category[0].option}
                  title={category[0].title}
                />
                <Category
                  id={category[1].id}
                  value={category[1].option}
                  title={category[1].title}
                />
                <Category
                  id={category[2].id}
                  value={category[2].option}
                  title={category[2].title}
                />
                <Category
                  id={category[3].id}
                  value={category[3].option}
                  title={category[3].title}
                />
              </div>

              <RadioButton
                id={radio[2].id}
                value={radio[2].option}
                title={radio[2].title}
              />

              <input
                className="mt-2 custom"
                type="text"
                placeholder="Free text search..."
              />
            </div>

            <button type="button" className="btn mt-4">
              Get a joke
            </button>

            <Card title={quote[0].title}>
              No one truly knows who's Chuck Norris' real father. No one is
              biologically strong enough for this. He must've conceived himself.
            </Card>
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
