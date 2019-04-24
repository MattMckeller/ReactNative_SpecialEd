import {
  FORGOT_PASSWORD_DID_SHOW_ERROR_TOAST, FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_START, FORGOT_PASSWORD_SUCCESS,
} from '../actions/types';

const DEFAULT_ERROR_MESSAGE = 'Reset password failed.';
const INITIAL_STATE = {
  user: null,
  loading: false,
  error: '',
  shouldOpenErrorToast: false,
};
const ForgotPasswordReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FORGOT_PASSWORD_START:
      return { ...state, loading: true, error: '' };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: payload,
      };
    case FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        shouldOpenErrorToast: true,
        error: (payload && payload.error) ? (payload.error) : DEFAULT_ERROR_MESSAGE,
      };
    case FORGOT_PASSWORD_DID_SHOW_ERROR_TOAST:
      return {
        ...state,
        shouldOpenErrorToast: false,
      };
    default:
      return state;
  }
};

export default ForgotPasswordReducer;
