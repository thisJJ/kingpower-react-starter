import React from 'react'
import { Form, Select, Input, Button } from 'antd';
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { editUser } from '../reducers/user-list-reducer'
import * as _ from 'lodash'

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input

const mapStateToProps = (state, props) => {
  const { params: { key } } = props.match
  const { userList } = state.userManager.userList

  const user = userList.find((user) => user.key === key) 
  return {
    user
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  editUser
}, dispatch)

class UserEditContainer extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const {form, editUser, history, match: {params}} = this.props

    form.validateFields((err, values) => {
      if (!err) {
        values.key = params.key
        console.log('Received values of form: ', values);
        editUser(values)
        history.push('/user-manager/list')
      }
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="First Name"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 5 }}
        >
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please input your firstName!' }],
          })(
            <Input autoComplete="first-name"/>
          )}

        </FormItem>
        <FormItem
          label="Last Name"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 5 }}
        >
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
          autoComplete="ad"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('address', {})(
            <TextArea rows="6" autoComplete="address"/>
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 8 }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    Form.create({
      mapPropsToFields(props){

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