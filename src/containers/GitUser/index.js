import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { userName } from '../../store/GitUser/actions'

import GitUser from './GitUser'

const mapStateToProps = state => ({
  github: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    userName
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(GitUser)