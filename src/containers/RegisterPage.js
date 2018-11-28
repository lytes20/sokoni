import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegisterForm from '../components/RegisterForm';
import * as AuthActions from '../actions/AuthActions';

class RegisterPage extends React.Component {
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
    console.log(this.props, 'props')
    this.props.actions.registerUser(this.state.user)
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
        <RegisterForm
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
  console.log(state, 'state')
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
