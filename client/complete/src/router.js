import React from 'react';
import { Router,Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App.js'
import Home from './components/Home.js'
import NewCat from './components/NewCat.js'
// import Product from './components/Product.js'
import NewCourse from './components/NewCourse.js'
import LogIn from './components/LogIn.js'
import SignUp from './components/SignUp.js'
import Profile from './components/Profile.js'
import Order from './components/Order.js'

export default function () {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='new-cat' component={NewCat} />
        <Route path='new-course' component={NewCourse} />
        <Route path='login' component={LogIn} />
        <Route path='signup' component={SignUp} />
        <Route path='profile' component={Profile} />
        <Route path='order' component={Order} />
      </Route>
    </Router>
  )
}
