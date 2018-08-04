import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.requestMovies]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successMovies]: (state, { movies, total_pages, query }) => ({
    ...state,
    [query]: {
      ...state[query],
      ...movies
    },
    currentTotalPages: total_pages,
    fetching: false
  })
}, { fetching: false });
