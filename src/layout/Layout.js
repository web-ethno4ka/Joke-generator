import React, { Component } from 'react';
import Pagination from '../component/Pagination/Pagination';
import RadioButton from '../component/Radiobutton/Radiobutton';
import Category from '../component/Category/Category';
import Card from '../component/Card/Card';
import './Layout.css';

class Layout extends Component {
  state = {
    radio: [{ value: 'Random' }, { value: 'From categories' }, { value: 'Search' }],

    category: [{ value: 'animal' }, { value: 'career' }, { value: 'celebrity' }, { value: 'dev' }],

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
    switch (e.currentTarget.value) {
      case 'Random':
        handler = this.getRandomJoke;
        break;
      case 'From categories':
        handler = this.getJokeByCategory;
        break;
      case 'Search':
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
      checked: e.currentTarget.value,
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
      this.state.checked === 'Random' ||
      (this.state.checked === 'From categories' && this.state.currentCategory !== '') ||
      (this.state.checked === 'Search' && this.state.inputValue !== '')
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
        <div className="section-main d-flex flex-column col-md-7 col-sm-10 my-5">
          <div className="mx-auto my-0 col-md-8 col-10">
            <h1>Hey!</h1>
            <h2>Let's try to find a joke for you:</h2>
            <div className="d-flex flex-column mt-3">
              <RadioButton onChange={this.onSelected} value={this.state.radio[0].value} />
              <RadioButton onChange={this.onSelected} value={this.state.radio[1].value} />

              {this.state.checked === 'From categories' ? (
                <div className="joke-categories">
                  {this.state.category.map((category, key) => (
                    <Category key={key} value={category.value} onChange={this.onChangeCategory} />
                  ))}
                </div>
              ) : null}

              <RadioButton onChange={this.onSelected} value={this.state.radio[2].value} />

              {this.state.checked === 'Search' ? (
                <input
                  className="stylized-input mt-2"
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
              className="get-joke-btn btn mt-4">
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

        <div className="section-favourite d-md-flex d-none d-sm-none flex-column col-xl-4 col-lg-5 pt-5">
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
