import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import CreateAccountReducer from './CreateAccountReducer';
import ForgotPasswordReducer from './ForgotPasswordReducer';

export default combineReducers({
  auth: AuthReducer,
  createAccount: CreateAccountReducer,
  forgotPassword: ForgotPasswordReducer,
  form: formReducer,
});
