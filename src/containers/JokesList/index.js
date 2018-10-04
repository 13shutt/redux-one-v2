import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchJoke } from './duck/actions'

import JokesList from './JokesList'

const mapStateToProps = state => ({
  jokes: state.jokes
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchJoke,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(JokesList)