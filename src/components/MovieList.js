import React from 'react';
import Movie from './Movie';


const MovieList = (props) => {
  return (
    props.movies.map((movie, i) => {
      return <Movie movie={movie} key={i}/>
    })

  )
}

export default MovieList;

//<Movie movie={props.movies[0]}/>