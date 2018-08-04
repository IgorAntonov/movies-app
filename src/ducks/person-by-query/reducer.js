import _ from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.requestPersons]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successPersons]: (state, { normalizedData, total_pages, query }) => ({
    ...state,
    [query]: {
      ...state[query],
      normalizedData
    },
    currentTotalPages: total_pages,
    fetching: false
  })
}, { fetching: false });

///////////////////selectors////////////////////////

export const getPersonsArray = persons => {
  return _.values(persons);
};
