// reducers.js
import { combineReducers } from 'redux'
import kingpowerReducer from './reducer/kingpower' // kingpower.js

export default combineReducers({
  kingpower: kingpowerReducer
})