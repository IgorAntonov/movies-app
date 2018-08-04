import { createAction } from 'redux-act';

export const actions = {
  requestDiscover: createAction('discover-movies/REQUEST'),
  successDiscover: createAction('discover-movies/SUCCESS')
};
