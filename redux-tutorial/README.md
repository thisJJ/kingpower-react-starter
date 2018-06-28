# Redux Tutorial


#### Setup React
```
npx create-react-app my-app
cd my-app
npm start
```

#### Redux Structure

Tools Library
```
npm i --save redux redux-devtools-extension redux-thunk redux-logger react-redux prop-types
```

 #### Setup Redux Store
```javascript
// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import containersReducer from './reducers' // reducers.js

const rootReducer = combineReducers({
  containers: containersReducer,
})
export default (initialState = {}) => {

  const logger = createLogger({ collapsed: true })
  const reduxMiddleware = applyMiddleware(...[thunkMiddleware], logger)

  return createStore(rootReducer, initialState, composeWithDevTools(reduxMiddleware))
}
```


#### Combine Reducer store
You can combine other store in file. 
```javascript
// reducers.js
import { combineReducers } from 'redux'

const reducer = () => ({
  text: 'Hello Kingpower!'
})

export default combineReducers({
  kingpower: reducer
})
```

#### Make Provider for App connect with Redux store

```javascript
// withRedux.js
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
```

#### การดึงข้อมูลจาก Redux store มาใช้งาน
``` javascript
// App.js
import React, { Component } from 'react'
import KingpowerContainer from './container/Kingpower' // Kingpower.js

export default class App extends Component {
  render(){
    return (
      <KingpowerContainer />
    )
  }
}

// ./container/Kingpower.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose} from 'redux'
import withRedux from '../withRedux' // withRedux.js

class KingpowerContainer extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render(){
    return(
      <div>{ this.props.text }</div>
    )
  }
}

const mapStateToProps = (state) => ({
  text: state.containers.kingpower.text
})

export default compose(
  withRedux(
    mapStateToProps
  )
)(KingpowerContainer)

```

#### Creare Action for update Redux store
```javascript
// ./action/kingpower.js

// สร้าง Action type
export const UPDATE_TEXT = 'APP/KINGPOWER/UPDATE_TEXT'
// สร้าง Action Creator
export const onUpdateText = (text) => {
  return {
    type: UPDATE_TEXT,
    payload: {
      text
    }
  }
}
```
```javascript
// ./reducer/kingpower.js
import { UPDATE_TEXT } from '../action/kingpower' // kingpower.js

const defaultState = {
  text: 'Hello Kingpower!'
}

const reducer = (state = defaultState, { type, payload }) => {
  switch(type) {
    case UPDATE_TEXT : {
      const newState = state
      newState.text = payload.text
      return { ...state, ...newState }
    }
    default: {
      return state
    }
  }
}


export default reducer
```

#### Update combine reducer


```javascript
// reducers.js
import { combineReducers } from 'redux'
import kingpowerReducer from './reducer/kingpower' // kingpower.js

export default combineReducers({
  kingpower: kingpowerReducer
})
```

#### Add action

```javascript
// ./container/Kingpower.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  onUpdateText
} from '../action/kingpower'

const mapStateToProps = (state) => ({
  text: state.containers.kingpower.text
})

const mapActionToProps = (dispatch) => bindActionCreators({
  onUpdateText
}, dispatch)

export default connect(
  mapStateToProps,
  mapActionToProps
)(class KingpowerContainer extends Component {
  static propTypes = {
    text: PropTypes.string,
    onUpdateText: PropTypes.func,
  }

  render(){
    console.log('this.props.text', this.props.text)
    return(
      <div onClick={ () => this.props.onUpdateText('Hello Kingpower Click!')}>{ this.props.text }</div>
    )
  }
})

```