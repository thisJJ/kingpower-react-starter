import React, { Component } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { addUser } from '../reducers/user-list-reducer'
import FormFillUser from '../../components/FormFillUser'
import {
  Form,
} from 'antd'
const mapStateToProps = state => ({
  userList: state.userManager.userList.userList
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser
}, dispatch)

class UserAddContainer extends Component {
  static propTypes = {
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { form, addUser, history } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)

        addUser(values)
        history.push('/user-manager/list')
      }
    })
  }

  render() {
    const { form } = this.props
    return (
      <div>
        <FormFillUser
          handleSubmit = { this.handleSubmit }
          form = { form }
        />
      </div>
    )
  }
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  Form.create()
)(UserAddContainer)
