import { values, sortBy } from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const keywordReducer = createReducer({
  [actions.successKeywords]: (state, { keywords, id }) => ({
    ...state,
    [id]: keywords
  })
}, {});

export const moviesByKeywordReducer = createReducer({
  [actions.requestMoviesByKeyWord]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successMoviesByKeyWord]: (state, { movies, id, total_pages }) => ({
    ...state,
    [id]: {
      ...state[id],
      ...movies
    },
    fetching: false,
    currentTotalPages: total_pages
  })
}, { fetching: false });

export const getKeywordsMovies = keyword => sortBy(values(keyword), 'popularity').reverse();
export const getKeywords = movie => values(movie);
