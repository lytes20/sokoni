import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from '../components/LoginForm';
import * as AuthActions from '../actions/AuthActions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {
        email: '',
        username: '',
        password: ''
      },
      user: {
        email: '',
        username: '',
        password: ''
      }
    };
  }

  changeUser = (event) => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({user});
  }

  submitUser = (event) => {
    event.preventDefault();

    this.props.actions.loginUser(this.state.user)
      .then(res => {
        const token = res.response.token;
        if (token) {
          localStorage.setItem('token', token);
          this.props.history.push('/');
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  render() {
    return (
      <div>
        <LoginForm
          open={true}
          onSubmit={this.submitUser}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.users.length > 0) {
    return {
      user: state.users
    };
  }
  return {
    user: {}
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
