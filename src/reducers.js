import { combineReducers } from 'redux'

import fetchJokesReducer from './containers/JokesList/duck/reducer'

export default function createReducer() {
  return combineReducers({
    jokes: fetchJokesReducer
  })
}