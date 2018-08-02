import React from 'react';

import MoviesListDiscover from '../../containers/MoviesListDiscover';

const DiscoverList =  ({ match }) => {
  const { cert, date, sort, genres } = match.params;
  return <MoviesListDiscover 
    cert={cert}
    date={date}
    sort={sort}
    genres={genres}
  />
};

export default DiscoverList;