import { values, sortBy, slice } from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const castReducer = createReducer({
  [actions.successCastCrew]: (state, { cast, id }) => ({
    ...state,
    [id]: cast
  })
}, {});

export const crewReducer = createReducer({
  [actions.successCastCrew]: (state, { crew, id }) => ({
    ...state,
    [id]: crew
  })
}, {});

export const getCast = movieId => {
  const unsortedCast = values(movieId);
  return sortBy(unsortedCast, 'cast_id');
};
export const getPrimaryCast = movieId => {
  const cast = getCast(movieId);
  return slice(cast, 0, 9);
};

export const getCrew = movieId => values(movieId);
export const getPrimaryCrew = movieId => {
  const crew = getCrew(movieId);
  return slice(crew, 0, 9);
};
