import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.requestMovies]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successMovies]: (state, { normalizedData, total_pages, query }) => ({
    ...state,
    [query]: {
      ...state[query],
      ...normalizedData
    },
    currentTotalPages: total_pages,
    fetching: false
  })
}, { fetching: false });
