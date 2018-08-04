import _ from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.requestGenreMovies]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successGenreMovies]: (state, { normalizedData, total_pages, id }) => ({
    ...state,
    [id]: {
      ...state[id],
      ...normalizedData
    },
    fetching: false,
    totalPages: total_pages
  })
}, { fetching: false });

///////////////////selectors////////////////////////

export const getGenreMoviesArray = (movies) => {
  const unsorted = _.values(movies);
  return _.sortBy(unsorted, 'popularity').reverse();
};
