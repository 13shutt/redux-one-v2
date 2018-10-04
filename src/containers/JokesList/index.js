import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchJokes } from './duck/actions'

import JokesList from './JokesList'

const mapStateToProps = state => ({
  jokes: state.jokes
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchJokes,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(JokesList)