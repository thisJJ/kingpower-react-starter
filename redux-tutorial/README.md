# Redux Tutorial


#### ติดตั้ง React
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

 #### ติดตั้ง Redux Store
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


#### ส่วนของข้อมูลที่จัดเก็บใน Reducer store
สามารถที่จะเชื่อมต่อกับ reducer อื่น ๆ ได้จากตรงนี้
```javascript
// reducers.js
import { combineReducers } from 'redux'

const count = () => ({
  lastUpdate: 0,
  light: false,
  count: 0
})

export default combineReducers({
  count: count
})
```

#### การทำ Provider เพื่อให้ App เชื่อมต่อกับ Redux store

```javascript
// App.js
import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import initStore from './store' // store.js
import KingpowerContainer from './container/Kingpower' // Kingpower.js

const store = initStore()

export default class App extends Component {
  render(){
    return (
      <Provider store={ store }>
        <KingpowerContainer { ... this.props } />
      </Provider>
    )
  }
}

```

#### การดึงข้อมูลจาก Redux store มาใช้งาน
``` javascript
// ./container/Kingpower.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'

class KingpowerContainer extends Component {
  static propTypes = {
    count: PropTypes.number
  }

  render(){
    return(
      <div>{ this.props.count }</div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count
})

export default compose(
  mapStateToProps
)

```

#### การสร้าง Action เพื่อเปลี่ยนแปลงข้อมูลใน Redux store
```javascript
// ./action/count.js

// สร้าง Action type
export const UPDATE_COUNT = 'APP/KINGPOWER/UPDATE_COUNT'
// สร้าง Action Creator
export const onUpdateCount = (count) => {
  return {
    type: UPDATE_COUNT,
    payload: {
      count
    }
  }
}
```
```javascript
// ./reducer/count.js

import { UPDATE_COUNT } from './action/count' // count.js

const defaultState = {
  count: 0
}

const reducer = (state = defaultState, { type, payload }) => {
  switch(type) {
    case UPDATE_COUNT : {
      const newState = state
      newState.count = payload.count
      return newState
    }
    default: {
      return state
    }
  }
}


export default reducer
```

#### การ Combine reducer หรือ รวม Reducer เป็นกลุ่มเดียว


```javascript
// reducers.js
import { combineReducers } from 'redux'
import countReducer from './reducers/count' // count.js

export default combineReducers({
  countReducer: countReducer
})
```

เมื่อเราเปลี่ยนแปลงรูปร่าง Combile ใหม่ จะต้องกลับไปแก้ในส่วนของ Container ที่ทำการ mapStateToProps ด้วย รวมถึงการเรียกใช้ Action

```javascript
// ./container/Kingpower.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose, bindActionCreators } from 'redux'
import { onUpdateCount } from './action/count' // count.js

class KingpowerContainer extends Component {
  static propTypes = {
    count: PropTypes.number,
    onUpdateCount: PropTypes.func
  }

  render(){
    return(
      <div onClick={ () => this.props.onUpdateCount( this.props.count + 1 )}>{ this.props.count }</div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.countReducer.count
})

const mapActionToProps = (dispatch) => bindActionCreators({
  onUpdateCount
})

export default compose(
  mapStateToProps,
  mapActionToProps
)
```