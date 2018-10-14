import { FETCH_PROFILE_DATA, NAME_CHANGE } from './constants';

const initialState = {
  username: [],
  profile: [],
  repos: []
};

function profileReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_PROFILE_DATA:
    return {
      profile: [...state.profile, action.payload],
    };

    case NAME_CHANGE:
    console.log('success', action.payload)
    return {
      username: action.payload
    }

    default:
    return state;

  }
}

export default profileReducer;