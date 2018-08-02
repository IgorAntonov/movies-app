import _ from 'lodash';

import * as actions from '../constants/actionTypes';

const initialState = {
  popular: {},
  upcoming: {},
  top: {},
  currentDetails: {},
  currentTotalPages: null
}

const top = (state = { fetching: false }, action) => {
  switch (action.type) {
    case actions.TOP_REQUESTED:
      return {...state, fetching: action.fetching};
    case actions.TOP_RECEIVED:
      return {...state, ...action.payload, fetching: action.fetching}; 
    default:
      return state;
  }
}

const popular = (state = { fetching: false }, action) => {
  switch (action.type) {
    case actions.POPULAR_REQUESTED:
      return {...state, fetching: action.fetching};
    case actions.POPULAR_RECEIVED:
      return {...state, ...action.payload, fetching: action.fetching}; 
    default:
      return state;
  }
}

const upcoming = (state = { fetching: false }, action) => {
  switch (action.type) {
    case actions.UPCOMING_REQUESTED:
      return {...state, fetching: action.fetching};
    case actions.UPCOMING_RECEIVED:
      return {...state, ...action.payload, fetching: action.fetching}; 
    default:
      return state;
  }
}

const movies = (state = initialState, action) => {
  switch (action.type) {

    case actions.POPULAR_RECEIVED:
    case actions.POPULAR_REQUESTED:
      return {...state, popular:popular(state.popular, action), currentTotalPages: action.totalPages};
    
    case actions.TOP_RECEIVED:
    case actions.TOP_REQUESTED:
      return {...state, top:top(state.top, action), currentTotalPages: action.totalPages};
      
    case actions.UPCOMING_RECEIVED:
    case actions.UPCOMING_REQUESTED:
      return {...state, upcoming:upcoming(state.upcoming, action), currentTotalPages: action.totalPages};

    case actions.DETAILS_RECEIVED:
      return {...state, currentDetails:action.payload};
    default:
      return state;
  }
};

export default movies;


///////////////////selectors////////////////////////

export const getSortedMoviesArray = (movies, sortParam) => {
  const unsorted = _.values(_.omit(movies, 'fetching'));
  
  return _.sortBy(unsorted, sortParam).reverse();
  
};

export const getCurrentDetails = (details) => {
  return _.values(details)[0];
};





