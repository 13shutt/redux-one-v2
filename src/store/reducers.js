import { combineReducers } from 'redux'

import jokesReducer from './JokesList/reducer'
import profileReducer from './GitUser/reducer'

export default function createReducer() {
  return combineReducers({
    jokes: jokesReducer,
    github: profileReducer
  })
}