import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {store, persistor} from '../src/store/';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

/*Pages*/

import Home from './view/home/';
import Login from './view/login/';
import NewUser from './view/user/';
import Order from './view/order/';
import OrderDetails from './view/order-details/'



class App extends Component {
  state = {
    response: ''
  };


  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/home' component={Home}></Route>
          <Route exact path='/newuser' component={NewUser}></Route>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/order' component={Order}></Route>
          <Route path='/orderedit/:id' component={Order}></Route>
          <Route path='/orderdetails/:id' component={OrderDetails}></Route>
        </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;