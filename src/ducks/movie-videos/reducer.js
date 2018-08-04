import _ from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.successMovieVideos]: (state, { normalizedMovieVideos, id }) => ({
    ...state,
    [id]: normalizedMovieVideos
  })
}, {});

//////////selectors///////////////

export const getMovieVideos = (movie) => {
  return _.values(movie);
};
