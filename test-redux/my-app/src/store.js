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
