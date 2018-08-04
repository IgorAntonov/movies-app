import { values, sortBy } from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.requestGenreMovies]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successGenreMovies]: (state, { movies, total_pages, id }) => ({
    ...state,
    [id]: {
      ...state[id],
      ...movies
    },
    fetching: false,
    totalPages: total_pages
  })
}, { fetching: false });

export const getGenreMoviesArray = movies => {
  const unsorted = values(movies);
  return sortBy(unsorted, 'popularity').reverse();
};
