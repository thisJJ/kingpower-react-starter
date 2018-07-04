import { combineReducers } from 'redux'

import userListReducer from './user-list-reducer'

export default combineReducers({
  userList: userListReducer
})
