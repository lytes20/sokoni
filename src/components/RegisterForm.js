import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
    };
  }

  render() {
    const {onSubmit, onChange, errors, user} = this.props;

    return (
      <MuiThemeProvider>
        <Dialog
          open={this.state.open}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Register</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              floatingLabelText="Username"
              name="username"
              errorText={errors.username}
              onChange={onChange}
              fullWidth
            />
            <TextField
              floatingLabelText="Email"
              name="email"
              errorText={errors.email}
              onChange={onChange}
              fullWidth
            />
            <TextField
              floatingLabelText="Password"
              name="password"
              errorText={errors.password}
              onChange={onChange}
              value={user.password}
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onSubmit} color="primary">
              Register
            </Button>
            <Button href="/" color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </MuiThemeProvider>
    )
  }
};

export default RegisterForm;
