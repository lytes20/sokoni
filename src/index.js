import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'react-redux';
import { Provider }  from 'react-redux';

import './index.css';
import HomePageComponent from './components/Index';
import RootReducer from './reducers/RootReducer';
import ConfigureStore from './store/ConfigureStore';

const store = ConfigureStore();

ReactDOM.render((
  <Provider store={store}>
    <HomePageComponent />
  </Provider>
), document.getElementById('root'));
