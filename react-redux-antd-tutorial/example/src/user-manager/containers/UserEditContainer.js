import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
  Button,
  Form,
  Input
} from 'antd'

import { editUser } from '../reducers/user-list-reducer'

const { Item: FormItem } = Form
const { TextArea } = Input

const mapStateToProps = (state, props) => {
  const { params: { key } } = props.match
  const userList = state.userManager.userList.userList
  const user = userList.find((userList) => userList.key === key) 
  return { user }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  editUser
}, dispatch)

class UserAddContainer extends Component {
  
  static propTypes = {
    user: PropTypes.object
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { form, editUser, match: {params :{ key } }, history } = this.props

    form.validateFields((err, values) => {
      if (!err) {
        values.key = key
        editUser(values)
        history.push('/user-manager/list')
      }
    })
  }

  render() {
    const { form: { getFieldDecorator } } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="First Name">
          {getFieldDecorator('firstName', {
            rules: [{
              required: true, message: 'Please input your firstname!',
            }],
          })(
            <Input autoComplete="first-name"/>
          )}
        </FormItem>
        <FormItem
          label="Last Name">
          {getFieldDecorator('lastName', {
            rules: [{
              required: true, message: 'Please input your lastname!',
            }],
          })(
            <Input autoComplete="last-name"/>
          )}
        </FormItem>
        <FormItem
          label="Address"
          autoComplete="ad">
          {getFieldDecorator('address', {})(
            <TextArea rows="6" autoComplete="address"/>
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit" >Edit</Button>
        </FormItem>
      </Form>
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
      if(props.user){
        return {
          firstName: Form.createFormField({
            ...props.user,
            value: props.user.firstName,
          }),
          lastName: Form.createFormField({
            ...props.user,
            value: props.user.lastName,
          }),
          address: Form.createFormField({
            ...props.user,
            value: props.user.address,
          }),
        }
      }
      else return{}
    }
  })
)(UserAddContainer)
