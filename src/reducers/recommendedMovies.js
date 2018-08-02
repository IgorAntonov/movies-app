import _ from 'lodash';

import * as actions from '../constants/actionTypes';

const initialState = {
  fetching: false, 
  currentTotalPages: null
};

const recommendedMovies = (state = initialState, action) => {
  switch (action.type) {
    
    case actions.RECOMMENDED_MOVIES_RECEIVED:
      return {...state, [action.id]: {...state[action.id], ...action.recommendedMovies}, 
      fetching: action.fetching, currentTotalPages: action.totalPages};

    case actions.RECOMMENDED_MOVIES_REQUESTED:
      return {...state, fetching: action.fetching}
    default:
      return state;
  }
};

export default recommendedMovies;

//////////selectors///////////////

export const getRecommendedMovies = movie => {
  return _.values(movie);
};