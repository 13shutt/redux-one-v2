import { NAME_CHANGE, FETCH_PROFILE_DATA } from './constants';
import { apiUserRequest } from '../../utils/github-api'

const userName = value => ({
    type: NAME_CHANGE,
    payload: value
})

const fetchProfile = name => dispatch => {
  dispatch({
    type: FETCH_PROFILE_DATA,
    payload: apiUserRequest(name)
  })
}

export { userName, fetchProfile }