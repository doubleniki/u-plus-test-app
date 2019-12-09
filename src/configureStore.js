import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createPromise } from 'redux-promise-middleware';

import rootReducer from './reducers';

export default function configureStore() {
  const logDeps = [thunk];
  
  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    logDeps.push(logger);
  }
  
  const middleware = [
    createPromise({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
    }),
    ...logDeps
  ];
  return createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );
}