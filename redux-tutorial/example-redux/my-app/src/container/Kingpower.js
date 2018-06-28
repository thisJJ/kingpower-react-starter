import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  onUpdateText
} from '../action/kingpower'

const mapStateToProps = (state) => ({
  text: state.containers.kingpower.text
})

const mapActionToProps = (dispatch) => bindActionCreators({
  onUpdateText
}, dispatch)

export default connect(
  mapStateToProps,
  mapActionToProps
)(class KingpowerContainer extends Component {
  static propTypes = {
    text: PropTypes.string,
    onUpdateText: PropTypes.func,
  }

  render(){
    console.log('this.props.text', this.props.text)
    return(
      <div onClick={ () => this.props.onUpdateText('Hello Kingpower Click!')}>{ this.props.text }</div>
    )
  }
})
