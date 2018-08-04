import { createAction } from 'redux-act';

export const actions = {
  requestRecommended: createAction('recommended/REQUEST'),
  successRecommended: createAction('recommended/SUCCESS')
};
