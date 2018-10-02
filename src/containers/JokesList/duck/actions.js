import { FETCH_JOKES } from './constants';

export const fetchJokes = () => dispatch => {
  console.log('fetching')
  fetch('http://api.icndb.com/jokes/random/')
    .then(res => res.json())
    .then(jokes => dispatch({
      type: FETCH_JOKES,
      payload: jokes
    }))
}