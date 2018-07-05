import React, { Component } from 'react'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { getUser, updateUser } from '../reducers/user-list-reducer'
import FormFillUser from '../../components/FormFillUser'
import {
  Form,
} from 'antd'
const mapStateToProps = state => ({
  userList: state.userManager.userList.userList,
  user: state.userManager.userList.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser,
  updateUser
}, dispatch)

class UserEditContainer extends Component {
  static propTypes = {
  }
  componentDidMount(){
    const { getUser, match:{ params: { key } } } = this.props
    getUser(key)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { form, updateUser, history } = this.props
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)

        updateUser(values)
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
  Form.create({
    mapPropsToFields(props) {
        if (!props.user) {
          return {}
        }

        return {
          firstName: Form.createFormField({
            ...props.user,
            value: props.user.firstName
          }),
          lastName: Form.createFormField({
            ...props.user,
            value: props.user.lastName
          }),
          address: Form.createFormField({
            ...props.user,
            value: props.user.address
          }),
        }
    }
  })
)(UserEditContainer)
