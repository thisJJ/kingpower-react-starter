import React, { Component } from 'react'
import UserEditContainer from '../containers/UserEditContainer'
import { Row, Col } from 'antd'

export default class UserEditView extends Component {
  render() {
    return (
      <Row style={{ marginTop: '10px' }} >
        <Col span={6} offset={9} style={{ marginBottom: '10px' }}>
          <UserEditContainer />
        </Col>
      </Row>
    )
  }
}
