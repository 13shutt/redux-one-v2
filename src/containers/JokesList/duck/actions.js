import { FETCH_JOKE } from './constants';

export const fetchJoke = (e) => dispatch => {
  fetch('http://api.icndb.com/jokes/random/')
    .then(res => res.json())
    .then(jokes => dispatch({
      type: FETCH_JOKE,
      payload: jokes
    }))
  e.preventDefault()
}