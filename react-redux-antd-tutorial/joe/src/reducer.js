import { combineReducers } from 'redux'
import userManagerReducer from './user-manager/reducers'


export default combineReducers({
  userManager: userManagerReducer
})
