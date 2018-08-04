import { values } from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.successMovieImages]: (state, { movieImages, id }) => ({
    ...state,
    [id]: movieImages
  })
}, {});

export const getMovieImages = movieId => values(movieId);
