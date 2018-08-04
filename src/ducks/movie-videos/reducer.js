import { values } from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.successMovieVideos]: (state, { movieVideos, id }) => ({
    ...state,
    [id]: movieVideos
  })
}, {});

export const getMovieVideos = movieId => values(movieId);
