import React, { Component } from 'react';
import Pagination from '../component/Pagination/Pagination';
import RadioButton from '../component/Radiobutton/Radiobutton';
import Category from '../component/Category/Category';
import Card from '../component/Card/Card';
import './Layout.css';

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

    card_classes: [{ classes: 'card mt-5 p-4' }, { classes: 'card favourite-card mt-5 p-4' }],

    checked: null,

    jokes: [],
    categories: [],

    favourites: [],
    inputValue: '',

    currentCategory: '',

    jokesPerPage: 5,
    currentPage: 1,

    handler: function () {},
  };

  componentDidMount() {
    let favourites = Object.keys(localStorage).map((key) => JSON.parse(localStorage.getItem(key)));

    this.setState({
      favourites,
    });
  }

  // componentDidUpdate() {
  //   console.log(this.state.jokes);
  // }

  getRandomJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => {
        let jokeList = [];
        jokeList.push(data);
        this.setState({ jokes: jokeList });
      });
  };

  getJokeByCategory = () => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${this.state.currentCategory}`)
      .then((res) => res.json())
      .then((data) => {
        let jokeList = [];
        jokeList.push(data);
        this.setState({ jokes: jokeList });
      });
  };

  getJokeBySearch = () => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${this.state.inputValue}`)
      .then((res) => res.json())
      .then((data) => this.setState({ jokes: data.result }));
  };

  onSelected = (e) => {
    let handler;
    switch (e.currentTarget.id) {
      case '1':
        handler = this.getRandomJoke;
        break;
      case '2':
        handler = this.getJokeByCategory;
        break;
      case '3':
        handler = this.getJokeBySearch;
        break;
      default:
        handler = function () {};
        break;
    }

    this.setState({
      handler,
      currentPage: 1,
      inputValue: '',
      checked: e.currentTarget.id,
    });

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

  isDisabled = () => {
    if (
      this.state.checked === '1' ||
      (this.state.checked === '2' && this.state.currentCategory !== '') ||
      (this.state.checked === '3' && this.state.inputValue !== '')
    ) {
      return false;
    } else return true;
  };

  onButtonClick = () => {
    this.state.handler.call(this);
  };

  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };

  like = (joke) => {
    if (!this.state.favourites.includes(joke)) {
      localStorage.setItem(joke.id, JSON.stringify(joke));
      this.setState({
        favourites: [...this.state.favourites, joke],
      });
    }
  };

  dislike = (joke) => {
    localStorage.removeItem(joke.id);
    console.log(joke.id);
    let newFavourites = this.state.favourites.filter((favourite) => favourite.id !== joke.id);
    this.setState({
      // favourites: [...this.state.favourites.splice(this.state.favourites.indexOf(joke), 1)],
      favourites: [...newFavourites],
    });
  };

  isFavourite = (joke) => {
    return this.state.favourites.includes(joke);
  };

  render() {
    const indexOfLastJoke = this.state.currentPage * this.state.jokesPerPage;
    const indexOfFirstJoke = indexOfLastJoke - this.state.jokesPerPage;
    const currentJokes = this.state.jokes.slice(indexOfFirstJoke, indexOfLastJoke);

    return (
      <div className="d-flex flex-row justify-content-between align-items-stretch min-vh-100">
        <div className="d-flex flex-column col-8 my-5">
          <div className="mx-auto my-0 col-8">
            <h1>Hey!</h1>
            <h2>Let's try to find a joke for you:</h2>
            <div className="d-flex flex-column mt-3">
              <RadioButton
                onChange={this.onSelected}
                id={this.state.radio[0].id}
                value={this.state.radio[0].value}
              />
              <RadioButton
                onChange={this.onSelected}
                id={this.state.radio[1].id}
                value={this.state.radio[1].value}
              />

              {this.state.checked === '2' ? (
                <div className="joke-categories">
                  {this.state.category.map((category, key) => (
                    <Category
                      key={key}
                      id={category.id} // { id: 4, value: 'animal' },
                      value={category.value}
                      onChange={this.onChangeCategory}
                    />
                  ))}
                </div>
              ) : null}

              <RadioButton
                onChange={this.onSelected}
                id={this.state.radio[2].id}
                value={this.state.radio[2].value}
              />

              {this.state.checked === '3' ? (
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
              disabled={this.isDisabled()}
              onClick={this.onButtonClick.bind(this)}
              type="button"
              id="button1"
              className="btn mt-4">
              Get a joke
            </button>

            {currentJokes.map((joke, id) => (
              <Card
                key={id}
                isFavourite={this.isFavourite}
                toggleFavourite={this.like}
                joke={joke}
                classes={this.state.card_classes[0].classes}
              />
            ))}
            <Pagination
              jokesPerPage={this.state.jokesPerPage}
              totalJokes={this.state.jokes.length}
              paginate={this.paginate}
            />
          </div>
        </div>

        <div className="sidebar d-flex flex-column col-3 pt-5">
          <div className="mx-auto my-0 col-10">
            <h3>Favourite</h3>
            {this.state.favourites.map((joke, id) => (
              <Card
                key={id}
                isFavourite={this.isFavourite}
                toggleFavourite={this.dislike}
                joke={joke}
                classes={this.state.card_classes[1].classes}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
