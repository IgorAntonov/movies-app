
import * as actions from '../constants/actionTypes';


const personDetails = (state = {fetching: false}, action) => {
  switch (action.type) {
    case actions.PERSON_DETAILS_REQUESTED:
      return {...state, fetching: action.fetching};
    case actions.PERSON_DETAILS_RECEIVED: {
      return {...state, [action.id]:action.data, fetching: action.fetching};
    }
    default:
      return state;
  }
};

export default personDetails;