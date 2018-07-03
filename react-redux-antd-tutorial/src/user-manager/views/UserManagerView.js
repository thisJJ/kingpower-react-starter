import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Button, Row, Col, Menu, Breadcrumb } from 'antd'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadUser as loadUserAction } from '../reducers/user-list-reducer'

import RouteWithSubRoutes from '../../components/RouteWithSubRoutes'

const {
  Header,
  Footer,
  Sider,
  Content,
} = Layout

const mapStateToProps = null
const mapDispatchToProps = dispatch => bindActionCreators({
  loadUser: loadUserAction
}, dispatch)

class UserManagerView extends Component {
  static state = {
    loadUser: PropTypes.func
  }

  componentDidMount() {
    const { loadUser } = this.props

    loadUser()
  }

  renderBreadcrumb = () => {
    const { location } = this.props

    const paths = location.pathname.split('/')
    let path = paths[paths.length - 1] 
    // if(!Number.isNaN(path)) {
    //   path = 'edit'
    // }

    return (
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        { (path === 'list' || path === 'add') &&
          <Breadcrumb.Item>
            <Link to="/user-manager/list">
              User List
            </Link>
          </Breadcrumb.Item>
        }
        { path === 'add' &&
          <Breadcrumb.Item>
            <Link to="/user-manager/add">
              Add New User
            </Link>
          </Breadcrumb.Item>
        }
        {/* { path === 'edit' &&
          <Breadcrumb.Item>
            <Link to="/user-manager/edit">
              Edit User
            </Link>
          </Breadcrumb.Item>
        } */}
      </Breadcrumb>
    )
  }

  render() {
    const { routes } = this.props

    return (
      <Layout>
        {/* <Header style={{ backgroundColor: '#F8F9F9', height: 'auto' }}>
          <Row>
            <Col span={12} offset={6}>
              <h1 style={{ margin: 0 }}>User Manager</h1>
            </Col>
          </Row>
        </Header> */}
        <Content style={{ backgroundColor: 'white' }} >
          <Row>
            <Col span={12} offset={6}>
              <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                  <Link to="/user-manager/list">User List</Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6} style={{ padding: '15px 0 20px 0' }}>
              { this.renderBreadcrumb() }
            </Col>
          </Row>
          { routes.map((route, index) =>
            <RouteWithSubRoutes key={index} route={route} />
          )}
        </Content>
      </Layout>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagerView)
