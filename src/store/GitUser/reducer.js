import { FETCH_PROFILE_DATA } from './constants';

const initialState = {
  repos: [],
  user: {}
};

function profileReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_PROFILE_DATA:
    console.log('success', action.payload)
    return {
      repos: action.payload.repos,
      user: action.payload.user
    };

    default:
    return state;

  }
}

export default profileReducer;