import { FETCH_JOKES } from './constants';

export const fetchJokes = (e) => dispatch => {
  console.log('fetching')
  fetch('http://api.icndb.com/jokes/random/')
    .then(res => res.json())
    .then(jokes => dispatch({
      type: FETCH_JOKES,
      payload: jokes
    }))
  e.preventDefault()
}