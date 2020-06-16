import React, { Component } from 'react';
import Pagination from '../component/Pagination/Pagination';
import './Layout.css';
import RadioButton from '../component/Radiobutton/Radiobutton';
import Category from '../component/Category/Category';
import Card from '../component/Card/Card';

class Layout extends Component {
  state = {
    radio: [
      { id: 1, value: 'Random' },
      { id: 2, value: 'From categories' },
      { id: 3, value: 'Search' },
    ],

    category: [
      { id: 4, value: 'animal' },
      { id: 5, value: 'career' },
      { id: 6, value: 'celebrity' },
      { id: 7, value: 'dev' },
    ],

    card_classes: [
      { classes: 'card mt-5 p-4' },
      { classes: 'card favourite-card mt-5 p-4' },
    ],

    checked: null,

    jokes: [],
    categories: [],

    inputValue: '',

    currentCategory: '',

    jokesPerPage: 5,
    currentPage: 1,
  };

  // componentDidMount() {
  //   // this.getRandomJoke();
  //   // this.getJokeByCategory('movie');
  //   this.getJokeBySearch('piping-hot');
  // }

  componentDidUpdate() {
    console.log(this.state.jokes);
  }

  getRandomJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => {
        let jokeList = [];
        jokeList.push(data);
        this.setState({ jokes: jokeList });
      });
  };

  getJokeByCategory = (jokeCategory) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${jokeCategory}`)
      .then((res) => res.json())
      .then((data) => {
        let jokeList = [];
        jokeList.push(data);
        this.setState({ jokes: jokeList });
      });
  };

  getJokeBySearch = (str) => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${str}`)
      .then((res) => res.json())
      .then((data) => this.setState({ jokes: data.result }));
  };

  onSelected = (e) => {
    this.setState({ checked: e.currentTarget.id });
    // console.log(e.currentTarget.id);
  };

  onHandleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onChangeCategory = (e) => {
    this.setState({
      currentCategory: e.target.value,
    });
  };

  onButtonClick = () => {
    this.getRandomJoke();
    // this.getJokeByCategory(this.state.currentCategory);
    // this.getJokeBySearch(this.state.inputValue);
  };

  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };

  render() {
    const radio = this.state.radio;
    const category = this.state.category;
    const card_classes = this.state.card_classes;
    const checked = this.state.checked;
    const categories = this.state.categories;
    const inputValue = this.state.inputValue;
    const jokes = this.state.jokes;
    // const indexOfLastJoke = this.state.currentPage * this.state.jokesPerPage;
    // const indexOfFirstJoke = indexOfLastJoke - this.state.jokesPerPage;
    // const currentJokes = this.state.jokes.slice(
    //   indexOfFirstJoke,
    //   indexOfLastJoke
    // );

    return (
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column col-8 my-5">
          <div className="mx-auto my-0 col-8">
            <h1>Hey!</h1>
            <h2>Let's try to find a joke for you:</h2>
            <div className="d-flex flex-column mt-3">
              <RadioButton
                onChange={this.onSelected}
                id={radio[0].id}
                value={radio[0].value}
              />
              <RadioButton
                onChange={this.onSelected}
                id={radio[1].id}
                value={radio[1].value}
              />

              {checked == 2 ? (
                <div className="joke-categories">
                  <Category
                    id={category[0].id}
                    value={category[0].value}
                    onChange={this.onChangeCategory}
                  />
                  <Category
                    id={category[1].id}
                    value={category[1].value}
                    onChange={this.onChangeCategory}
                  />
                  <Category
                    id={category[2].id}
                    value={category[2].value}
                    onChange={this.onChangeCategory}
                  />
                  <Category
                    id={category[3].id}
                    value={category[3].value}
                    onChange={this.onChangeCategory}
                  />
                </div>
              ) : null}

              <RadioButton
                onChange={this.onSelected}
                id={radio[2].id}
                value={radio[2].value}
              />

              {checked == 3 ? (
                <input
                  className="mt-2 custom"
                  type="text"
                  placeholder="Free text search..."
                  value={inputValue}
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

            <Card
              jokes={jokes}
              classes={card_classes[0].classes}
              categories={categories}
            />

            {/* <React.Fragment>
              <Card
                jokes={currentJokes}
                classes={card_classes[0].classes}
                category={categories}
              />
              <Pagination
                jokesPerPage={this.state.jokesPerPage}
                totalJokes={this.state.jokes.length}
                paginate={this.paginate}
              />
            </React.Fragment> */}

            {/* <Card classes={card_classes[0].classes} category={categories}>
              {jokes[0]?.value}
            </Card> */}
          </div>
        </div>

        <div className="sidebar d-flex flex-column col-3 pt-5">
          <div className="mx-auto my-0 col-10">
            <h3>Favourite</h3>
            {/* <Card classes={card_classes[1].classes} category={categories} value={joke}>
              {jokes}
            </Card>
            <Card classes={card_classes[1].classes} category={categories} value={joke}>
              {jokes}
            </Card> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
