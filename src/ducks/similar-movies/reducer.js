import _ from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.succesSimilarMoviess]: (state, { normalizedSimilarMovies, id }) => ({
    ...state,
    [id]: normalizedSimilarMovies
  })
}, {});

//////////selectors///////////////

export const getSimilarMovies = (movie) => {
  return _.values(movie);
};
