import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { rootReducer } from './ducks';


const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({ collapsed: true });
  middlewares.push(logger);
}

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
