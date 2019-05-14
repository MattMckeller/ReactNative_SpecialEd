import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import CreateAccountReducer from './CreateAccountReducer';
import ForgotPasswordReducer from './ForgotPasswordReducer';
import MainFabReducer from './MainFabReducer';

export default combineReducers({
  auth: AuthReducer,
  createAccount: CreateAccountReducer,
  forgotPassword: ForgotPasswordReducer,
  form: formReducer,
  mainFab: MainFabReducer,
});
