import _ from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const keywordReducer = createReducer({
  [actions.successKeywords]: (state, { normalizedKeywords, id }) => ({
    ...state,
    [id]: normalizedKeywords
  })
}, {});

export const moviesByKeywordReducer = createReducer({
  [actions.requestMoviesByKeyWord]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successMoviesByKeyWord]: (state, { normalizedData, id, total_pages }) => ({
    ...state,
    [id]: {
      ...state[id],
      ...normalizedData
    },
    fetching: false,
    currentTotalPages: total_pages
  })
}, { fetching: false });

////Selectors//////////

export const getKeywordsMovies = keyword => {
  return _.sortBy(_.values(keyword), 'popularity').reverse();
};

export const getKeywords = (movie) => {
  return _.values(movie);
};
