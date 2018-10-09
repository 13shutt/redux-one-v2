import { combineReducers } from 'redux'

import jokesReducer from './JokesList/reducer'

export default function createReducer() {
  return combineReducers({
    jokes: jokesReducer
  })
}