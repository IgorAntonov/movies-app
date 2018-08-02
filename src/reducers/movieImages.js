import _ from 'lodash';

import * as actions from '../constants/actionTypes';

const movieImages = (state = {}, action) => {
  switch (action.type) {
    case actions.MOVIE_IMAGES_RECEIVED:
      return {...state, [action.id]: action.images};
  
    default:
      return state;
  }
};

export default movieImages;

//////////selectors///////////////

export const getMovieImages = (movie) => {
  return _.values(movie);
};