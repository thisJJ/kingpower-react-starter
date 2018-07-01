import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Table, Icon, Divider, Row, Col, Button } from 'antd'
import { loadUser as loadUserAction } from '../reducers/user-list-reducer'

import UserListContainer from '../containers/UserListContainer'

const { Column, ColumnGroup } = Table


export default class UserListView extends Component {
  render() {
    return (
      <UserListContainer />
    )
  }
}
