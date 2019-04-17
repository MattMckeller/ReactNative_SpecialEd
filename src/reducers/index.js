import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import CreateAccountReducer from './CreateAccountReducer';

export default combineReducers({
  auth: AuthReducer,
  createAccount: CreateAccountReducer,
  form: formReducer,
});
