import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchProfile } from '../../store/GitUser/actions'

import GitUser from './GitUser'

const mapStateToProps = state => ({
  github: state.github
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchProfile
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(GitUser)