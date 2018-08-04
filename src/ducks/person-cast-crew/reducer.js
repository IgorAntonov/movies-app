import { createReducer } from 'redux-act';

import { actions } from './actions';

export const personCastReducer = createReducer({
  [actions.requestPersonCredits]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successPersonCredits]: (state, { id, cast }) => ({
    ...state,
    [id]: cast,
    fetching: false
  })
}, { fetching: false });

export const personCrewReducer = createReducer({
  [actions.requestPersonCredits]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successPersonCredits]: (state, { id, resultCrew }) => ({
    ...state,
    [id]: resultCrew,
    fetching: false
  })
});
