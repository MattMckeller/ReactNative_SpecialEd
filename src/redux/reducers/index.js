import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import CreateAccountReducer from './CreateAccountReducer';
import ForgotPasswordReducer from './ForgotPasswordReducer';
import MainFabReducer from './MainFabReducer';
import StudentsReducer from './StudentsReducer';
import LoadingReducer from './LoadingReducer';
import RouteReducer from './RouteReducer';
import BottomSlidingCardReducer from './BottomSlidingCardReducer';
import ToastReducer from './ToastReducer';

// todo create interface(s) for reference
export default combineReducers({
  auth: AuthReducer,
  createAccount: CreateAccountReducer,
  forgotPassword: ForgotPasswordReducer,
  form: formReducer,
  mainFab: MainFabReducer,
  toasts: ToastReducer,
  studentState: StudentsReducer,
  loadingState: LoadingReducer,
  routeState: RouteReducer,
  bottomSlidingCardState: BottomSlidingCardReducer,
});
