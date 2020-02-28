import { combineReducers } from 'redux';
import { goods, goodsFetchingState } from './goods';
import { cart } from './cart';

export default combineReducers({
  goodsFetchingState,
  goods,
  cart,
});
