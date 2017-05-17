 import { createStore, applyMiddleware, compose } from 'redux';
 import rootReducer from './reducers/index';
 import thunk from 'redux-thunk';

 // let account = {
 //   currentUser: ''
 // }
 //
 // let cart = {
 //
 // }
 //
 // const defaultState = {
 //   account,
 //   cart
 // }

 //const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunk)));
 const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

 export default store;
