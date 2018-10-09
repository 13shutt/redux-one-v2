import { FETCH_JOKE, DELETE_JOKE } from './constants';

const fetchJoke = (e) => dispatch => {
  fetch('http://api.icndb.com/jokes/random/')
    .then(res => res.json())
    .then(jokes => dispatch({
      type: FETCH_JOKE,
      payload: jokes
    }))
  e.preventDefault()
}

const deleteJoke = (item) => dispatch => {
  dispatch({
    type: DELETE_JOKE,
    payload: item
  })
}

export { fetchJoke, deleteJoke }