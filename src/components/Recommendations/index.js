import React from 'react';

import MoviesList from '../../containers/MoviesListRecommendations';

const Recommendations = props => {
  const { id } = props.match.params;
  return <MoviesList id={id} />  
};

export default Recommendations;