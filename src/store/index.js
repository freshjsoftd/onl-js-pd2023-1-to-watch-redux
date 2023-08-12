import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import toWatchReducer from './reducers/toWatchReducer';
import rootSaga from '../sagas';

/* function logger(store){
  return function(next){
    return function(action){
      console.log('Action is working', action);
      // console.log(store)
      fetch('/').then(() => next(action));
    }
  }
} */

const sagaMiddleware = createSagaMiddleware();

const middleWare = applyMiddleware(sagaMiddleware, logger);

export default createStore(toWatchReducer, composeWithDevTools(middleWare));

sagaMiddleware.run(rootSaga)
