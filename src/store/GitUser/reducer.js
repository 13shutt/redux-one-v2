import { FETCH_PROFILE_DATA } from './constants';

const initialState = {
  data: {}
};

function profileReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_PROFILE_DATA:
    console.log('success', action.payload)
    return {
      data: action.payload
    };

    default:
    return state;

  }
}

export default profileReducer;