import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { Table, Divider, Row, Col, Button } from 'antd'
import { deleteList } from '../reducers/user-list-reducer'
const { Column } = Table

const mapStateToProps = state => ({
  userList: state.userManager.userList.userList
})

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteList
}, dispatch)

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
    )
  }

  render() {
    const { userList, deleteList } = this.props
  
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
              render={(text, record) => (
                <span>
                  <a href="javascript:;">Action 一 {record.name}</a>
                  <Divider type="vertical" />
                  <a href={'/user-manager/edit/' + record.key }>Edit</a>
                  <Divider type="vertical" />
                  <a href="#" onClick={() =>deleteList(record.key)}>Delete</a>
                  <Divider type="vertical" />
                </span>
              )}
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
