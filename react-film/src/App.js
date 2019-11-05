import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';
import './App.css';

const { films } = TMDB;

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)
    if (filmIndex !== -1) {
      // The film is already favoed
      faves.splice(filmIndex, 1)
      console.log("removing a favorite", film.title)
    } else {
      // The film needs to be added
      faves.push(film)
      console.log("adding a favorite", film.title)
    }
    this.setState({faves})
  }


  render() {
    return (
      <div className="film-library">
        <FilmListing faves={this.state.faves}
          onFaveToggle={this.handleFaveToggle}
          films={this.state.films} />
        <FilmDetails film={this.state.current} />
      </div>
    );
  }
}

export default App;
