import React, { Component } from 'react'
import UserEditContainer from '../containers/UserEditContainer'

export default class UserEditView extends Component {
  render() {
    console.log(this.props)
    return (
      <UserEditContainer/>
    )
  }
}
