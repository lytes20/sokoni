import React, { Component } from 'react';
import { withRouter } from "react-router";

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import '../stylesheets/navbar.css';

class Header extends Component {
  render() {
    return (
      <AppBar
        title="SOKONI"
        showMenuIconButton={false}>
        <nav>
          <div className="top-bar">
          {
            localStorage.token ?
              <FlatButton onClick={() => this.logoutUser()}>Logout</FlatButton> :
              <div>
                <FlatButton href='/register'>Register</FlatButton>
                <FlatButton href='/login'>Login</FlatButton>
              </div>
          }
          </div>
        </nav>
      </AppBar>
    )
  }

  logoutUser = () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }
};

export default withRouter(Header);
