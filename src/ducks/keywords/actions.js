import { createAction } from 'redux-act';

export const actions = {
  requestKeywords: createAction('details/KEYWORDS_REQUEST'),
  successKeywords: createAction('details/KEYWORDS_SUCCESS'),
  requestMoviesByKeyWord: createAction('details/MOVIES_BY_KEYWORD_REQUEST'),
  successMoviesByKeyWord: createAction('details/MOVIES_BY_KEYWORD_SUCCESS')
};
