import { combineReducers } from 'redux';

import accountReducer from './account';
import cartReducer from './cart';

const rootReducer = combineReducers({
  account: accountReducer,
  cart: cartReducer
});

export default rootReducer;
