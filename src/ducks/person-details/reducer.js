import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.requestPersonDetails]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successPersonDetails]: (state, { id, data }) => ({
    ...state,
    [id]: data,
    fetching: false
  })
}, { fetching: false });
