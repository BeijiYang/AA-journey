import React from 'react';
import { Router,Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/App.js'
import Home from './components/Home.js'
import NewCat from './components/NewCat.js'
import Product from './components/Product.js'
import LogIn from './components/LogIn.js'
import SignUp from './components/SignUp.js'

export default function () {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/new-cat' component={NewCat} />
        <Route path='/new-product' component={Product} />
        <Route path='/login' component={LogIn} />
        <Route path='/signup' component={SignUp} />
      </Route>
    </Router>
  )
}
