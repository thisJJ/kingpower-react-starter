import React from 'react'
import { bindActionCreators, compose } from 'redux'
import { connect } from 'react-redux'
import {
  Button,
  Form,
  Input,
  Modal,
} from 'antd'

import * as CounterActions from '~/actions'
import {
  loadProduct
} from './store/reducer'

import {
  getProductSelector
} from './store/selector'

import '~/static/Home.css'

import { get, toUpper } from 'lodash'

class About extends React.Component {

  state = {
    visible: false,
  }

  componentDidMount = () => {
    const {
      match
    } = this.props
    this.props.loadProduct(get(match, 'params.sku', ''), get(match, 'params.lang', ''))
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.loadProduct(get(values, 'sku', ''), get(values, 'lang', ''))
        this.props.history.replace(`/product/${get(values, 'sku', '')}/${get(values, 'lang', '')}`)
      }
    })
  }

  render() {
    const {
      product,
      match
    } = this.props
    const { getFieldDecorator } = this.props.form
    const FormItem = Form.Item
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

          <FormItem
            label="Select namr"
            style={{width: 200, marginLeft: 'auto', marginRight: 'auto'}}
          >
            {getFieldDecorator('select-sku')(
              <select>
                <option value="jack">Jack</option>
                <option value="lucy">Lucy</option>
                <option value="disabled" disabled>Disabled</option>
                <option value="Yiminghe">yiminghe</option>
              </select>
            )}
          </FormItem>
          
          <Button id="product-btn" type="primary" htmlType="submit">Submit</Button>
        </Form>
        <h1>{ get(product, 'name', '') }</h1>
        <div>
          { get(product, 'images[0].baseUri', '') && 
            <img width="200"  alt={ get(product, 'name', '') } src={` ${get(product, 'images[0].baseUri', '')}/${get(product, 'images[0].filename', '')} `} />
          }
        </div>

        <div>
          <Button id="open-modal" type="primary" onClick={this.showModal}>Open Modal</Button>
          <Modal
            visible={this.state.visible}
            title="Title"
            footer={(<span>
              <Button id="close-modal" key="back" onClick={this.handleCancel}>Close</Button>
              <Button id="submit-modal" key="submit" type="primary" onClick={this.handleOk}>
                Submit
              </Button>
            </span>)}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  count: state.counter.count,
  product: getProductSelector(state)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...CounterActions,
    loadProduct
  }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  Form.create()
)(About)
