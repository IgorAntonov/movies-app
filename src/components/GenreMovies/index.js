import React from 'react';

import MoviesList from '../../containers/MoviesByGenre';

const GenreMovies = props => {
  const { id } = props.match.params;
  return <MoviesList id={id} />  
};

export default GenreMovies;