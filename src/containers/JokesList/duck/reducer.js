import { FETCH_JOKE } from './constants';

const initialState = {
  items: []
};

function jokesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOKE:
    return {
      items: [...state.items, action.payload],
    };
    default:
    return state;
  }
}

export default jokesReducer;