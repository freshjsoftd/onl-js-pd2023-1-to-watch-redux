import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers';

/* function logger(store){
  return function(next){
    return function(action){
      console.log('Action is working', action);
      // console.log(store)
      fetch('/').then(() => next(action));
    }
  }
} */

const middleWare = applyMiddleware(logger);

export default createStore(rootReducer, composeWithDevTools(middleWare));
