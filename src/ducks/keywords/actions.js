import { createAction } from 'redux-act';

export const actions = {
  requestKeywords: createAction('keywords/KEYWORDS_REQUEST'),
  successKeywords: createAction('keywords/KEYWORDS_SUCCESS'),
  requestMoviesByKeyword: createAction('keywords/MOVIES_BY_KEYWORD_REQUEST'),
  successMoviesByKeyword: createAction('keywords/MOVIES_BY_KEYWORD_SUCCESS')
};
