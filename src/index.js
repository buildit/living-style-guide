import './assets/stylesheets/main.scss';
import React from 'react';
import { render } from 'react-dom';
import Orders from './views/Orders';
import Landing from './views/Landing';
import Location from './views/Location';
import Menu from './views/Menu';
import Cart from './views/Cart';
import Receipt from './views/Receipt';
import History from './views/History';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import createStore from './store';
const store = createStore();

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Landing}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/landing" component={Landing}/>
        <Route path="/location" component={Location}/>
        <Route path="/menu" component={Menu}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/receipt" component={Receipt}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/history" component={History}/>
    </Router>
  </Provider>
), document.getElementById('root'))
