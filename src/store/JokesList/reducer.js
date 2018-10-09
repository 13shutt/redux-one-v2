import { FETCH_JOKE, DELETE_JOKE } from './constants';

const initialState = {
  items: []
};

function jokesReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_JOKE:
    return {
      items: [...state.items, action.payload],
    };

    case DELETE_JOKE:
    return {
      items: [...state.items.slice(0, action.payload), ...state.items.slice(action.payload + 1, state.items.length)]
    }

    default:
    return state;

  }
}

export default jokesReducer;