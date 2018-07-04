import shortid from 'shortid'

export const LOAD_USER_LIST = 'user-manager/user-list/LOAD_USER_LIST'
export const ADD_USER = 'user-manager/user-list/ADD_USER'

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
  userList: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_USER_LIST:
      return {
        ...state,
        userList: action.payload.userList,
      }
    case ADD_USER:
      const { user } = action.payload
      const { userList } = state

      userList.unshift(user)

      return {
        ...state,
        userList: userList,
      }
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
