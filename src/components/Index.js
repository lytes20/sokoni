import React, { Component } from 'react';

import Header from './Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class HomePageComponent extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header />
      </MuiThemeProvider>
    );
  }
}

export default HomePageComponent;
