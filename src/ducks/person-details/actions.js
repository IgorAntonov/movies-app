import { createAction } from 'redux-act';

export const actions = {
  requestPersonDetails: createAction('person-details/REQUEST'),
  successPersonDetails: createAction('person-details/SUCCESS'),
};
