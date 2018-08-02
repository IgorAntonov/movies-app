import _ from 'lodash';

import * as actions from '../constants/actionTypes';

const similarMovies = (state = {}, action) => {
  switch (action.type) {
    case actions.SIMILAR_MOVIES_RECEIVED:
      return {...state, [action.id]: action.similarMovies};
  
    default:
      return state;
  }
};

export default similarMovies;

//////////selectors///////////////

export const getSimilarMovies = (movie) => {
  return _.values(movie);
};