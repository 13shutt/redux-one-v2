import { connect } from 'react-redux'

import { fetchJokes } from './duck/actions'

import JokesList from './JokesList'

export default connect(null, { fetchJokes })(JokesList)