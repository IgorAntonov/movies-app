import { values, omit, sortBy } from 'lodash';
import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';

import { actions } from './actions';

const initialState = {
  popular: {},
  upcoming: {},
  top: {},
  currentDetails: {},
  currentTotalPages: null
};

const top = createReducer({
  [actions.requestTop]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successTop]: (state, { movies }) => ({
    ...state,
    ...movies,
    fetching: false
  })
}, initialState.top);

const popular = createReducer({
  [actions.requestPopular]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successPopular]: (state, { movies }) => ({
    ...state,
    ...movies,
    fetching: false
  })
}, initialState.popular);

const upcoming = createReducer({
  [actions.requestUpcoming]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successUpcoming]: (state, { movies }) => ({
    ...state,
    ...movies,
    fetching: false
  })
}, initialState.upcoming);

const currentDetails = createReducer({
  [actions.successDetails]: (state, payload) => payload
}, initialState.currentDetails);

const currentTotalPages = createReducer({
  [actions.successPopular]: (state, { total_pages }) => total_pages,
  [actions.successTop]: (state, { total_pages }) => total_pages,
  [actions.successUpcoming]: (state, { total_pages }) => total_pages,
}, initialState.currentTotalPages);

export const reducer = combineReducers({
  top,
  popular,
  upcoming,
  currentDetails,
  currentTotalPages
});

export const getSortedMoviesArray = (movies, sortParam) => {
  const unsorted = values(omit(movies, 'fetching'));
  return sortBy(unsorted, sortParam).reverse();
};
export const getCurrentDetails = details => values(details)[0];
