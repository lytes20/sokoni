import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';

import Routes from './routes';
import ConfigureStore from './store/ConfigureStore';

const store = ConfigureStore();

ReactDOM.render((
  <Provider store={store}>
    <Routes />
  </Provider>
), document.getElementById('root'));
