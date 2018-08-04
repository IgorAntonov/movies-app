import { createAction } from 'redux-act';

export const actions = {
  requestPersonCredits: createAction('person-cast-crew/REQUEST'),
  successPersonCredits: createAction('person-cast-crew/SUCCESS')
};
