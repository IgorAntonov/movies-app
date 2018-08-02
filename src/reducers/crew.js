import _ from 'lodash';

import * as actions from '../constants/actionTypes';

const crew = (state = {}, action) => {
  switch (action.type) {
    case actions.CAST_CREW_RECEIVED:
      return {...state, [action.id]: action.crew};
  
    default:
      return state;
  }
};

export default crew;


//////////selectors///////////////

export const getCrew = (movie) => {
  return _.values(movie); 
};

export const getPrimaryCrew = (movie) => {
  const crew = getCrew(movie);
  return _.slice(crew, 0, 9);
}

