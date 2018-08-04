import _ from 'lodash';
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
  [actions.successTop]: (state, { normalizedData }) => ({
    ...state,
    ...normalizedData,
    fetching: false
  })
}, initialState.top);

const popular = createReducer({
  [actions.requestPopular]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successPopular]: (state, { normalizedData }) => ({
    ...state,
    ...normalizedData,
    fetching: false
  })
}, initialState.popular);

const upcoming = createReducer({
  [actions.requestUpcoming]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successUpcoming]: (state, { normalizedData }) => ({
    ...state,
    ...normalizedData,
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

///////////////////selectors////////////////////////

export const getSortedMoviesArray = (movies, sortParam) => {
  const unsorted = _.values(_.omit(movies, 'fetching'));
  return _.sortBy(unsorted, sortParam).reverse();
};

export const getCurrentDetails = (details) => {
  return _.values(details)[0];
};
