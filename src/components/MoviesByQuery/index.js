import React from 'react';

import MoviesList from '../../containers/MoviesListByQuery';

const MoviesByQuery = props => {
  const { query } = props.match.params;
  return <MoviesList id={query} />
}

export default MoviesByQuery;