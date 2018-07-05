import { combineReducers } from 'redux';
import counter from './counter';
import products from '~/containers/Product/store/reducer'

const rootReducer = combineReducers({
  counter,
  products,
});

export default rootReducer;
