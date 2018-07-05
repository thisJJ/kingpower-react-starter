import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { Table, Icon, Divider, Row, Col, Button } from 'antd'

import { deleteUserByKey } from '../reducers/user-list-reducer'
import { bindActionCreators } from 'redux';


const { Column, ColumnGroup } = Table

const mapStateToProps = state => ({
  userList: state.userManager.userList.userList
})

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteUserByKey,
},dispatch)

class UserListContainer extends Component {
  static propTypes = {
    userList: PropTypes.arrayOf(
      PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        age: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number
        ]),
        address: PropTypes.string
      }).isRequired
    ),
    deleteUserByKey: PropTypes.func,
  }

  handleDelete = ((id) => {
    const { deleteUserByKey } = this.props
    deleteUserByKey(id)
  })

  render() {
    const { userList } = this.props

    return (
      <Row style={{ marginTop: '10px' }} >
        <Col span={12} offset={6} style={{ marginBottom: '10px' }}>
          <Button type="primary" >
            <Link to="/user-manager/add" >Add New User</Link>
          </Button>
        </Col>
        <Col span={12} offset={6}>
          <Table dataSource={ userList }>
            <Column
              title="First Name"
              dataIndex="firstName"
              key="firstName"
            />
            <Column
              title="Last Name"
              dataIndex="lastName"
              key="lastName"
            />
            <Column
              title="Address"
              dataIndex="address"
              key="address"
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => {
                return(
                <span>
                  <a href="javascript:;">Action 一 {record.name}</a>
                  <Divider type="vertical" />
                  <Link to={`/user-manager/edit/${ record.key }`} >Edit</Link>
                  <Divider type="vertical" />
                  <a href="javascript:;" onClick={ () => this.handleDelete(record.key) }>Delete</a>
                  <Divider type="vertical" />
                </span>
              )}}
            />
          </Table>
        </Col>
      </Row>
    )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserListContainer)
