import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
  Table,
  Icon,
  Divider,
  Row,
  Col,
  Button,
  Form,
  Input
} from 'antd'

import { addUser } from '../reducers/user-list-reducer'

const { Item: FormItem } = Form
const { Column, ColumnGroup } = Table
const { TextArea } = Input

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
            htmlType="submit" >Add</Button>
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
  Form.create()
)(UserAddContainer)
