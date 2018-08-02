import _ from 'lodash';

import * as actions from '../constants/actionTypes';

const movieVideos = (state = {}, action) => {
  switch (action.type) {
    case actions.MOVIE_VIDEOS_RECEIVED:
      return {...state, [action.id]: action.videos};
  
    default:
      return state;
  }
};

export default movieVideos;

//////////selectors///////////////

export const getMovieVideos = (movie) => {
  return _.values(movie);
};