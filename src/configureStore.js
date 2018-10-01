import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createReducer from './reducers';

export default function configureStore() {
  const middlewares = [thunk];
  const enhancers = composeWithDevTools(applyMiddleware(...middlewares));
  return createStore((createReducer()), enhancers);
}