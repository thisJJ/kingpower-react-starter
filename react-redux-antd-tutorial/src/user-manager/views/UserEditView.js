import React, { Component } from 'react'
import UserEditContainer from '../containers/UserEditContainer'

export default class UserEditView extends Component {
  render() {
    return (
      <UserEditContainer { ...this.props } />
    )
  }
}
