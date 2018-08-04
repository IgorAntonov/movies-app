import { values } from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.successReviews]: (state, { movieReviews, id }) => ({
    ...state,
    [id]: movieReviews
  })
}, {});

export const getMovieReviews = movieId => values(movieId);
