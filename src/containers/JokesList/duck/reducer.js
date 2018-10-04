import { FETCH_JOKES } from './constants';

const initialState = {
  items: []
};

function fetchJokesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOKES:
    console.log(state)
    return {
      items: [...state.items, action.payload],
    };
    default:
    return state;
  }
}

export default fetchJokesReducer;