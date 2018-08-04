import _ from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.successReviews]: (state, { normalizedMovieReviews, id }) => ({
    ...state,
    [id]: normalizedMovieReviews
  })
}, {});

//////////selectors///////////////

export const getMovieReviews = (movie) => {
  return _.values(movie);
};
