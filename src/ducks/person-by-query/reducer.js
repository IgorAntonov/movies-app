import { values, sortBy } from 'lodash';
import { createReducer } from 'redux-act';

import { actions } from './actions';

export const reducer = createReducer({
  [actions.requestPersons]: state => ({
    ...state,
    fetching: true
  }),
  [actions.successPersons]: (state, { persons, total_pages, query }) => ({
    ...state,
    [query]: {
      ...state[query],
      ...persons
    },
    currentTotalPages: total_pages,
    fetching: false
  })
}, { fetching: false });

export const getPersonsArray = persons => {
  const unsorted = values(persons);
  return sortBy(unsorted, 'popularity').reverse();
};
