import _ from 'lodash';

import * as actions from '../constants/actionTypes';

const discoverMovies = (state = { fetching:false }, action) => {
  switch (action.type) {
    case actions.DISCOVER_MOVIES_REQUESTED:
      return {...state, fetching: action.fetching};
    case actions.DISCOVER_MOVIES_RECEIVED:
      return {...state, [action.cuttedUrl]: {...state[action.cuttedUrl], ...action.data},
        currentTotalPages: action.totalPages, fetching: action.fetching} 
    default:
      return state;
  }
};

export default discoverMovies;


///////////////////selectors////////////////////////

export const getSortedDiscoverMovies = (movies, sortParam) => {   
  const unsorted = _.values(movies);

  switch (sortParam) {
    case 'popularity_up':
      return _.sortBy(unsorted, 'popularity').reverse();
    case 'popularity_down':
      return _.sortBy(unsorted, 'popularity');
    case 'rating_up':
      return _.sortBy(unsorted, ['vote_average', 'original_title']).reverse();
    case 'rating_down':
      return _.sortBy(unsorted, ['vote_average', 'original_title']);
    case 'alphabet_up':
      return _.sortBy(unsorted, movie => movie.original_title.toLowerCase());
    case 'alphabet_down':
      return _.sortBy(unsorted, movie => movie.original_title.toLowerCase()).reverse();
    case 'release date_up':
      return _.sortBy(unsorted, movie =>  Date.parse(movie.release_date)).reverse();
    case 'release date_down':
      return _.sortBy(unsorted, movie =>  Date.parse(movie.release_date));
    default:
      return unsorted;
  }  
};
