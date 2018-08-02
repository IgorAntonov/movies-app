import React from 'react';

import MoviesListKeywords from '../../containers/MovieListKeywords';

const KeywordsMoviesList = props => {
  const { id } = props.match.params;
  return <MoviesListKeywords id={id} />  
};

export default KeywordsMoviesList;