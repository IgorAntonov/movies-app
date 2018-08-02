import _ from 'lodash';

import * as actions from '../constants/actionTypes';


const cast = (state = {}, action) => {
  switch (action.type) {
    case actions.CAST_CREW_RECEIVED:
      return {...state, [action.id]: action.cast};
  
    default:
      return state;
  }
};

export default cast;


//////////selectors///////////////

export const getCast = (movie) => {
  const unsortedCast = _.values(movie);
  return _.sortBy(unsortedCast, 'cast_id');
};

export const getPrimaryCast = (movie) => {
  const cast = getCast(movie);
  return _.slice(cast, 0, 9);
}

