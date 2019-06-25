import {
  CREATE_ACCOUNT_START,
  CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_FAIL, CREATE_ACCOUNT_DID_SHOW_ERROR_TOAST,
} from '../actions/types';

// Move default messages to error config.js
const DEFAULT_ERROR_MESSAGE = 'Authentication failed.';
const INITIAL_STATE = {
  loading: false,
  createAccountError: '', // todo update to just error
  shouldOpenErrorToast: false,
};
const CreateAccountReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ACCOUNT_START:
      return { ...state, loading: true, createAccountError: '' };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: payload,
      };
    case CREATE_ACCOUNT_FAIL:
      return {
        ...state,
        loading: false,
        shouldOpenErrorToast: true,
        createAccountError: (payload && payload.createAccountError)
          ? (payload.createAccountError) : DEFAULT_ERROR_MESSAGE,
      };
    case CREATE_ACCOUNT_DID_SHOW_ERROR_TOAST:
      return {
        ...state,
        shouldOpenErrorToast: false,
      };
    default:
      return state;
  }
};

export default CreateAccountReducer;
