import { createAction } from 'redux-act';

export const actions = {
  requestPersons: createAction('person-by-query/REQUEST'),
  successPersons: createAction('person-by-query/SUCCESS'),
};
