import { FETCH_JOKES } from './constants';

const initialState = {
  jokes: [],
};

function fetchJokesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOKES:
      console.log('reducer')
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default fetchJokesReducer;