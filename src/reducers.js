import { combineReducers } from 'redux'

import jokesReducer from './containers/JokesList/duck/reducer'

export default function createReducer() {
  return combineReducers({
    jokes: jokesReducer
  })
}