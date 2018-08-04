import { createAction } from 'redux-act';

export const actions = {
  requestCastCrew: createAction('cast-crew/CASTCREW_REQUEST'),
  successCastCrew: createAction('cast-crew/CASTCREW_SUCCESS')
};
