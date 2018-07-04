import React, { Component } from 'react'
import { Row, Col } from 'antd'
import UserAddContainer from '../containers/UserAddContainer'


export default class UserAddView extends Component {
  render() {
    return (
      <Row style={{ marginTop: '10px' }} >
        <Col span={6} offset={9} style={{ marginBottom: '10px' }}>
          <UserAddContainer />
        </Col>
      </Row>
    )
  }
}
