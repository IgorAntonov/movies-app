import _ from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const castReducer = createReducer({
  [actions.successCastCrew]: (state, { normalizedCast, id }) => ({
    ...state,
    [id]: normalizedCast
  })
}, {});

export const crewReducer = createReducer({
  [actions.successCastCrew]: (state, { normalizedCrew, id }) => ({
    ...state,
    [id]: normalizedCrew
  })
}, {});

//////////selectors///////////////

export const getCast = (movie) => {
  const unsortedCast = _.values(movie);
  return _.sortBy(unsortedCast, 'cast_id');
};

export const getPrimaryCast = (movie) => {
  const cast = getCast(movie);
  return _.slice(cast, 0, 9);
};

export const getCrew = (movie) => {
  return _.values(movie); 
};

export const getPrimaryCrew = (movie) => {
  const crew = getCrew(movie);
  return _.slice(crew, 0, 9);
};
