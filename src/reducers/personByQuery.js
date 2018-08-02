import _ from 'lodash';

import * as actions from '../constants/actionTypes';

const personByQuery = (state = {fetching: false}, action) => {
  switch (action.type) {
    case actions.PERSONS_REQUESTED:
      return {...state, fetching: action.fetching};
    case actions.PERSONS_RECEIVED:
      return {...state, [action.query]: {...state[action.query], ...action.data}, 
        currentTotalPages: action.totalPages, fetching: action.fetching } 
    default:
      return state;
  }
};

export default personByQuery;



///////////////////selectors////////////////////////

export const getPersonsArray = persons => {
  return _.values(persons);
};