import {
  LOGIN_USER_START, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_DID_SHOW_ERROR_TOAST,
} from '../actions/types';

const DEFAULT_ERROR_MESSAGE = 'Authentication failed.';
const INITIAL_STATE = {
  email: '',
  password: '',
  organization: '',
  loading: false,
  authError: '',
  shouldOpenErrorToast: false,
};
const AuthReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        shouldOpenErrorToast: true,
        authError: (payload && payload.authError) ? (payload.authError) : DEFAULT_ERROR_MESSAGE,
      };
    case LOGIN_DID_SHOW_ERROR_TOAST:
      return {
        ...state,
        shouldOpenErrorToast: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;