import { combineReducers } from 'redux';
import users from './UsersReducer';

const RootReducer = combineReducers({
  users,
});

export default RootReducer;
