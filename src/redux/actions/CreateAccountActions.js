import {
  CREATE_ACCOUNT_DID_SHOW_ERROR_TOAST,
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_START,
} from './types';

export const doCreateAccount = ({ email, password, organization }) => {
  return (dispatch) => {
    console.log('create account action', email, password, organization);
    dispatch({ type: CREATE_ACCOUNT_START });

    // todo implement backend calls
    // setTimeout(() => {
    //   createAccountSuccess(dispatch, { name: 'name val' });
    // }, 1000);
    console.log('auth action');

    setTimeout(() => {
      createAccountFail(dispatch, { authError: 'An error has occurred.' });
    }, 1000);


  };
};

const createAccountSuccess = (dispatch, user) => {
  dispatch({ type: CREATE_ACCOUNT_START, payload: user });
  // redirect
};

const createAccountFail = (dispatch) => {
  dispatch({
    type: CREATE_ACCOUNT_FAIL,
    payload: { createAccountError: 'Error from backend.' },
  });
};

export const didShowCreateAccountErrorToast = () => ({
  type: CREATE_ACCOUNT_DID_SHOW_ERROR_TOAST,
  payload: null,
});
