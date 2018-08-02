import * as actions from '../constants/actionTypes';

const moviesByQuery = (state = {fetching: false}, action) => {
  switch (action.type) {
    case actions.MOVIES_REQUESTED:
      return {...state, fetching: action.fetching};
    case actions.MOVIES_RECEIVED:
      return {...state, [action.query]: {...state[action.query], ...action.data}, 
        currentTotalPages: action.totalPages, fetching: action.fetching} 
    default:
      return state;
  }
};

export default moviesByQuery;
