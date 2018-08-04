import { createAction } from 'redux-act';

export const actions = {
  requestCastCrew: createAction('cast-crew/REQUEST'),
  successCastCrew: createAction('cast-crew/SUCCESS')
};
