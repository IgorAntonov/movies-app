import _ from 'lodash';

import * as actions from '../constants/actionTypes';

const movieReviews = (state = {}, action) => {
  switch (action.type) {
    case actions.MOVIE_REVIEWS_RECEIVED:
      return {...state, [action.id]: action.reviews};
  
    default:
      return state;
  }
};

export default movieReviews;

//////////selectors///////////////

export const getMovieReviews = (movie) => {
  return _.values(movie);
};