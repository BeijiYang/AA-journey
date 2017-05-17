import { combineReducers } from 'redux';

import account from './account';
import cart from './cart';
import cats from './cats';

const rootReducer = combineReducers({
  account,
  cart,
  cats
});

export default rootReducer;
