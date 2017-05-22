import { combineReducers } from 'redux';

import account from './account';
import cart from './cart';
import cats from './cats';
import courses from './courses';
import orders from './order'

const rootReducer = combineReducers({
  account,
  cart,
  cats,
  courses,
  orders,
});

export default rootReducer;
