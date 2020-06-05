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
      { id: 4, value: 'ANIMAL', title: 'animal' },
      { id: 5, value: 'CAREER', title: 'career' },
      { id: 6, value: 'CELEBRITY', title: 'celebrity' },
      { id: 7, value: 'DEV', title: 'dev' },
    ],

    card_classes: [
      { classes: 'card mt-5 p-4' },
      { classes: 'card favourite-card mt-5 p-4' },
    ],

    checked: null,

    joke: '',
    categories: [],

    inputValue: '',

    currentCategory: '',
  };

  // componentDidMount() {
  //   // this.getRandomJoke();
  //   // this.getJokeByCategory('movie');
  //   this.getJokeBySearch('piping-hot');
  // }

  getRandomJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          joke: data.value,
        })
      );
  };

  getJokeByCategory = (jokeCategory) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${jokeCategory}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          joke: data.value,
          categories: data.categories,
        })
      );
  };

  getJokeBySearch = (str) => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${str}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          joke: data.result[0].value,
          categories: data.result[0].categories,
        })
      );
  };

  onSelected = (e) => {
    this.setState({ checked: e.currentTarget.id });
    // console.log(e.currentTarget.id);
  };

  onHandleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
    // console.log(e.target.value);
  };

  onChangeCategory = (e) => {
    this.setState({
      currentCategory: e.target.title,
    });
    console.log(e.target.title);
  };

  onButtonClick = () => {
    this.getJokeByCategory(this.state.currentCategory);
    // this.getJokeBySearch(this.state.inputValue);
  };

  render() {
    const radio = this.state.radio;
    const category = this.state.category;
    const card_classes = this.state.card_classes;
    const checked = this.state.checked;
    const joke = this.state.joke;
    const categories = this.state.categories;
    const inputValue = this.state.inputValue;
    // const currentCategory = this.state.currentCategory;

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
                    option={category[0].option}
                    title={category[0].title}
                    onChangeCategory={this.onChangeCategory}
                  />
                  <Category
                    id={category[1].id}
                    option={category[1].option}
                    title={category[1].title}
                    onChangeCategory={this.onChangeCategory}
                  />
                  <Category
                    id={category[2].id}
                    option={category[2].option}
                    title={category[2].title}
                    onChangeCategory={this.onChangeCategory}
                  />
                  <Category
                    id={category[3].id}
                    option={category[3].option}
                    title={category[3].title}
                    onChangeCategory={this.onChangeCategory}
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
                  value={this.state.inputValue}
                  onChange={(e) => this.onHandleChange(e)}
                />
              ) : null}
            </div>

            <button
              disabled={this.state.checked === null}
              onClick={this.onButtonClick.bind(this)}
              type="button"
              id="button1"
              className="btn mt-4"
            >
              Get a joke
            </button>

            <Card classes={card_classes[0].classes} title={categories}>
              {joke}
            </Card>
          </div>
        </div>

        <div className="sidebar d-flex flex-column col-3 pt-5">
          <div className="mx-auto my-0 col-10">
            <h3>Favourite</h3>
            <Card classes={card_classes[1].classes} title={categories}>
              {joke}
            </Card>
            <Card classes={card_classes[1].classes} title={categories}>
              {joke}
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
