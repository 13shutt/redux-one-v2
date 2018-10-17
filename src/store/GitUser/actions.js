import { FETCH_PROFILE_DATA } from './constants';
import { apiRequest } from '../../utils/github-api'

const fetchProfile = name => async dispatch => {
  dispatch({
    type: FETCH_PROFILE_DATA,
    payload: await apiRequest(name)
  })
}

export { fetchProfile }