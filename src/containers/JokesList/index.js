import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchJoke, deleteJoke } from '../../store/JokesList/actions'

import JokesList from './JokesList'

const mapStateToProps = state => ({
  jokes: state.jokes
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchJoke, deleteJoke,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(JokesList)