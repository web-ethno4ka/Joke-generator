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

    card_classes: [
      { classes: 'card mt-5 p-4' },
      { classes: 'card favourite-card mt-5 p-4' },
    ],

    checked: null,

    value: '',
    categories: [],
  };

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/random?category=animal')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          value: data.value,
          categories: data.categories,
        })
      );
  }

  onSelected = (e) => {
    // console.log(e.currentTarget.id);
    this.setState({ checked: e.currentTarget.id });
    let btn = document.getElementById('button1');
    btn.disabled = false;
  };

  render() {
    const radio = this.state.radio;
    const category = this.state.category;
    const card_classes = this.state.card_classes;
    const checked = this.state.checked;
    const value = this.state.value;
    const categories = this.state.categories;

    return (
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column col-8 my-5">
          <div className="mx-auto my-0 col-8">
            <h1>Hey!</h1>
            <h2>Let's try to find a joke for you:</h2>
            <div className="d-flex flex-column mt-3">
              <RadioButton
                onSelected={this.onSelected}
                id={radio[0].id}
                value={radio[0].option}
                title={radio[0].title}
              />
              <RadioButton
                onSelected={this.onSelected}
                id={radio[1].id}
                value={radio[1].option}
                title={radio[1].title}
              />

              {checked == 2 ? (
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
              ) : null}

              <RadioButton
                onSelected={this.onSelected}
                id={radio[2].id}
                value={radio[2].option}
                title={radio[2].title}
              />

              {checked == 3 ? (
                <input
                  className="mt-2 custom"
                  type="text"
                  placeholder="Free text search..."
                />
              ) : null}
            </div>

            <button
              type="button"
              id="button1"
              className="btn mt-4"
              disabled="disabled"
            >
              Get a joke
            </button>

            <Card classes={card_classes[0].classes} title={categories}>
              {value}
            </Card>
          </div>
        </div>

        <div className="sidebar d-flex flex-column col-3 pt-5">
          <div className="mx-auto my-0 col-10">
            <h3>Favourite</h3>
            <Card classes={card_classes[1].classes} title={categories}>
              {value}
            </Card>
            <Card classes={card_classes[1].classes} title={categories}>
              {value}
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
