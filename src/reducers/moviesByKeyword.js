import _ from 'lodash';

import * as actions from '../constants/actionTypes';

const moviesByKeyword = (state = {fetching: false}, action) => {
  switch (action.type) {
    case actions.MOVIES_BY_KEYWORD_REQUESTED:
      return {...state, fetching: action.fetching};
    case actions.MOVIES_BY_KEYWORD_RECEIVED: 
      return {...state, [action.id]:{ ...state[action.id], ...action.movies },
        fetching: action.fetching, currentTotalPages: action.totalPages};
    default:
      return state;
  }
};

export default moviesByKeyword;


////Selectors//////////

export const getKeywordsMovies = keyword => {
  return _.sortBy(_.values(keyword), 'popularity').reverse();
};