import shortid from 'shortid'
export const LOAD_USER_LIST = 'user-manager/user-list/LOAD_USER_LIST'
export const ADD_USER = 'user-manager/user-list/ADD_USER'
export const UPDATE_USER = 'user-manager/user-list/UPDATE_USER'
export const DELETE_USER = 'user-manager/user-list/DELETE_USER'
export const GET_USER = 'user-manager/user-list/GET_USER'

const apiData = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  address: 'Sidney No. 1 Lake Park',
}]

export const initialState = {
  userList: [],
  user: {}
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_USER_LIST: {
      const newState = state
      newState.userList = action.payload.userList
      return newState
    }
    case GET_USER: {
      const newState = state
      newState.user = state.userList.find((user) => user.key == action.payload)
      return newState
    }
    case ADD_USER:
      const { user } = action.payload
      const { userList } = state

      userList.unshift(user)

      return {
        ...state,
        userList: userList,
      }
    case UPDATE_USER:
      const userKey = state.user.key
      const editedUser = action.payload.user
      const newUserList = state.userList.map((user, index) => {
        if(user.key == userKey) {
          return {
            key: userKey,
            firstName: editedUser.firstName,
            lastName: editedUser.lastName,
            address: editedUser.address || ''
          }
        }else {
          return user
        }
      })
      return {
        ...state,
        userList: newUserList,
      }
    case DELETE_USER:
      return Object.assign({}, state, {
        userList: state.userList.filter(user => user.key != action.payload)
      })
    default:
      return state
  }
}


export const loadUser = () => ({
  type: LOAD_USER_LIST,
  payload: {
    userList: apiData
  }
})

export const addUser = (user) => ({
  type: ADD_USER,
  payload: {
    user: {
      key: shortid.generate(),
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address || ''
    }
  }
})

export const deleteUserByKey = (key) => ({
  type: DELETE_USER,
  payload: key
})

export const getUser = (key) => ({
  type: GET_USER,
  payload: key
})

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: {
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address || ''
    }
  }
})