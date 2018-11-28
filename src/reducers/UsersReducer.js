import * as types from '../actions/ActionTypes';
import InitialState from './InitialState';

export default function usersReducer(state = InitialState.users, action) {
  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return Object.assign({}, action.user);
    case types.LOGIN_USER_SUCCESS:
      return Object.assign({}, action.user);
    default:
      return state;
  }
}
