import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {
  Button,
  Form,
  Input
} from 'antd'
const { Item: FormItem } = Form
const { TextArea } = Input

class FormFillUser extends Component {
    static propTypes = {
      handleSubmit: PropTypes.func,
    }
    render() {
      const { form: { getFieldDecorator }, handleSubmit } = this.props
      return(<Form onSubmit={handleSubmit}>
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
      </Form>)
    }
}

export default FormFillUser