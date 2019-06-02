import {
  FORGOT_PASSWORD_START,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_DID_SHOW_ERROR_TOAST,
} from './types';

export const forgotPassword = ({ email }) => {
  return (dispatch) => {
    dispatch({ type: FORGOT_PASSWORD_START }); // todo change and create actions

    // todo implement backend calls
    // setTimeout(() => {
    //   success(dispatch, { name: 'name val' });
    // }, 1000);

    setTimeout(() => {
      error(dispatch, { error: 'An error has occurred.' });
    }, 1000);


  };
};

const success = (dispatch, payload) => {
  dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload });
  // redirect
};

const error = (dispatch) => {
  dispatch({
    type: FORGOT_PASSWORD_FAIL,
    payload: { error: 'Error from backend.' },
  });
};

export const didShowForgotPasswordToast = () => ({
  type: FORGOT_PASSWORD_DID_SHOW_ERROR_TOAST,
  payload: null,
});
