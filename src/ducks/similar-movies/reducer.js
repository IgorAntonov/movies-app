import { values } from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.succesSimilarMoviess]: (state, { movies, id }) => ({
    ...state,
    [id]: movies
  })
}, {});

export const getSimilarMovies = movie => values(movie);
