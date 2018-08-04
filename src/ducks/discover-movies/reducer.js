import _ from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.requestDiscover]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successDiscover]: (state, { normalizedData, total_pages, cuttedUrl }) => ({
    ...state,
    [cuttedUrl]: {
      ...state[cuttedUrl],
      normalizedData
    },
    currentTotalPages: total_pages,
    fetching: false
  })
}, { fetching: false });

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
