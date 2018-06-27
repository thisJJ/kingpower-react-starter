import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import buildStore from './store'
 
const store = buildStore()

export default (...connectParams) => ComposedComponent => {
  const ConnectedComponent = connect(...connectParams)(ComposedComponent)
 
  const WithRedux = class extends Component {
    render() {
      return (
        <Provider store={store}>
          <ConnectedComponent { ...this.props } />
        </Provider>
      )
    }
  }
 
  return WithRedux
}
