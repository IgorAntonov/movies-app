import { values, sortBy } from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.requestDiscover]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successDiscover]: (state, { movies, total_pages, cuttedUrl }) => ({
    ...state,
    [cuttedUrl]: {
      ...state[cuttedUrl],
      ...movies
    },
    currentTotalPages: total_pages,
    fetching: false
  })
}, { fetching: false });

export const getSortedDiscoverMovies = (movies, sortParam) => {
  const unsorted = values(movies);

  switch (sortParam) {
    case 'popularity_up':
      return sortBy(unsorted, 'popularity').reverse();
    case 'popularity_down':
      return sortBy(unsorted, 'popularity');
    case 'rating_up':
      return sortBy(unsorted, ['vote_average', 'original_title']).reverse();
    case 'rating_down':
      return sortBy(unsorted, ['vote_average', 'original_title']);
    case 'alphabet_up':
      return sortBy(unsorted, movie => movie.original_title.toLowerCase());
    case 'alphabet_down':
      return sortBy(unsorted, movie => movie.original_title.toLowerCase()).reverse();
    case 'release date_up':
      return sortBy(unsorted, movie => Date.parse(movie.release_date)).reverse();
    case 'release date_down':
      return sortBy(unsorted, movie => Date.parse(movie.release_date));
    default:
      return unsorted;
  }
};
