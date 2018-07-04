import { INCREMENT_COUNTER, DECREMENT_COUNTER, DECREMENT_COUNTER_SUCCESS, LOAD_COUNTER } from '../actions';

const initialState = {
  count : 0
}

export default (state = {...initialState}, action) => {
  switch (action.type) {
    case LOAD_COUNTER:
      return { 
        count: 999
      }
    case INCREMENT_COUNTER:
      return { 
        count: state.count + 1 
      }
    case DECREMENT_COUNTER:
      return {
        ...state
      }
    case DECREMENT_COUNTER_SUCCESS:
      state.count -= action.count
      return {
        ...state
      }
    default:
      return state;
  }
};
