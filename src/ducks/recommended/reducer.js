import { values } from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

const initialState = {
  fetching: false,
  currentTotalPages: null
};

export const reducer = createReducer({
  [actions.requestRecommended]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successRecommended]: (state, { movies, id, total_pages }) => ({
    ...state,
    [id]: {
      ...state[id],
      ...movies
    },
    fetching: false,
    currentTotalPages: total_pages
  })
}, initialState);

export const getRecommendedMovies = movie => values(movie);
