import _ from 'lodash';

import * as actions from '../constants/actionTypes';

const keywords = (state = {}, action) => {
  switch (action.type) {
    case actions.KEYWORDS_RECEIVED:
      return {...state, [action.id]: action.keywords};
  
    default:
      return state;
  }
};

export default keywords;

//////////selectors///////////////

export const getKeywords = (movie) => {
  return _.values(movie);
};