import _ from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.successMovieImages]: (state, { normalizedMovieImages, id }) => ({
    ...state,
    [id]: normalizedMovieImages
  })
}, {});

//////////selectors///////////////

export const getMovieImages = (movie) => {
  return _.values(movie);
};