import _ from 'lodash';
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
  [actions.successRecommended]: (state, { normalizedRecommendedMovies, id, total_pages }) => ({
    ...state,
    [id]: {
      ...state[id],
      ...normalizedRecommendedMovies
    },
    fetching: false,
    currentTotalPages: total_pages
  })
}, initialState);

//////////selectors///////////////

export const getRecommendedMovies = movie => {
  return _.values(movie);
};
