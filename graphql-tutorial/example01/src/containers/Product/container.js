import React from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'antd';

import * as CounterActions from '~/actions';
import {
  loadProduct
} from './store/reducer'

import {
  getProductSelector
} from './store/selector'

import '~/static/Home.css';

import { get, toUpper } from 'lodash'

class About extends React.Component {

  componentDidMount = () => {
    const {
      match
    } = this.props
    this.props.loadProduct(get(match, 'params.sku', ''), get(match, 'params.lang', ''))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.loadProduct(get(values, 'sku', ''), get(values, 'lang', ''))
        this.props.history.replace(`/product/${get(values, 'sku', '')}/${get(values, 'lang', '')}`)
      }
    });
  }

  render() {
    const {
      product,
      match
    } = this.props
    const { getFieldDecorator } = this.props.form;
    const FormItem = Form.Item;
    return (
      <div style={{textAlign: 'center'}}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label="SKU"
            style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}
          >
            {getFieldDecorator('sku',{
              initialValue: get(match, 'params.sku', ''),
              rules: [{
                required: true,
                message: 'Please input sku!'
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            label="Lang"
            style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}
          >
            {getFieldDecorator('lang',{
              initialValue: get(match, 'params.lang', ''),
              normalize: value => toUpper(value),
              rules: [{
                required: true,
                message: 'Please input lang!'
              }],
            })(
              <Input />
            )}
          </FormItem>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
        <h1>{ get(product, 'name', '') }</h1>
        <div>
          { get(product, 'images[0].baseUri', '') && 
            <img width="200"  alt={ get(product, 'name', '') } src={` ${get(product, 'images[0].baseUri', '')}/${get(product, 'images[0].filename', '')} `} />
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  count: state.counter.count,
  product: getProductSelector(state)
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...CounterActions,
    loadProduct
  }, dispatch);
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  Form.create()
)(About);
