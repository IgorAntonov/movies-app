import * as actions from '../constants/actionTypes';

export const personCastCredits = (state={ fetching: false }, action) => {
  switch (action.type) {
    case actions.PERSON_MOVIE_CREDITS_REQUESTED:
      return {...state, fetching: action.fetching};
    case actions.PERSON_MOVIE_CREDITS_RECEIVED:
      return {...state, [action.id]:action.cast, fetching:action.fetching} 
    default:
      return state;
  }
};

export const personCrewCredits = (state={ fetching: false }, action) => {
  switch (action.type) {
    case actions.PERSON_MOVIE_CREDITS_REQUESTED:
      return {...state, fetching: action.fetching};
    case actions.PERSON_MOVIE_CREDITS_RECEIVED:
      return {...state, [action.id]:action.crew, fetching:action.fetching} 
    default:
      return state;
  }
};