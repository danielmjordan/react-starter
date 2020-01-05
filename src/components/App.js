import React from 'react';
import MovieList from './MovieList'
import Movie from './Movie'
import Search from './Search'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
    <div>
      <header><h1>Movie List</h1></header>
      <div>
        <MovieList movies={movies}/>
      </div>
    </div>
  )}
}

let movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default App;
