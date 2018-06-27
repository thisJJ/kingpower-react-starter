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