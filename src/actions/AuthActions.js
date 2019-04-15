import {
  LOGIN_USER_START,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS, LOGIN_DID_SHOW_ERROR_TOAST,
} from './types';

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    console.log('login user action', email, password);
    dispatch({ type: LOGIN_USER_START });

    // todo implement backend calls
    // setTimeout(() => {
    //   loginUserSuccess(dispatch, { name: 'name val' });
    // }, 1000);
    console.log('auth action');

    setTimeout(() => {
      loginUserFail(dispatch, { authError: 'An error has occurred.' });
    }, 1000);


  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  // Actions.main();
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: { authError: 'Error from backend.' },
  });
};

export const didShowErrorToast = () => ({
  type: LOGIN_DID_SHOW_ERROR_TOAST,
  payload: null,
});
