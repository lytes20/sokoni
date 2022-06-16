
import * as types from './ActionTypes';

export function registerUserSuccess(response) {
  return { type: types.REGISTER_USER_SUCCESS, response };
}

export function loginUserSuccess(response) {
  return { type: types.LOGIN_USER_SUCCESS, response };
}

export function registerUser(user) {
  return dispatch => {
    return fetch(`https://reqres.in/api/register`, {
        method: 'POST',
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          password: user.password
        }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then(response => response.json())
      .then(json => registerUserSuccess(json))
      .catch(error => console.log(error))
  };
}

export function loginUser(user) {
  return dispatch => {
    return fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        body: JSON.stringify({
          username: user.username,
          password: user.password
        }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then(response => response.json())
      .then(json => loginUserSuccess(json))
      .catch(error => console.log(error))
  };
}
