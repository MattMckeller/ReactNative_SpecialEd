// @flow
import { ADD_NEW_ERROR_TOAST, DISPLAYED_TOAST } from '../actions';

const uuidv4 = require('uuid/v4');

export interface ToastInterface {
  id: string;
  message: string;
  type: string; // todo see if enum exists
}

const INITIAL_STATE = {
  pendingToasts: [],
};
const ToastReducer = (state = INITIAL_STATE, action) => {
  let pendingToasts = [...state.pendingToasts];
  switch (action.type) {
    case ADD_NEW_ERROR_TOAST:
      console.log('added new toast', action.payload.message);
      pendingToasts.push(createToast('danger', action.payload.message));
      console.log({ pendingToasts });
      return {
        pendingToasts,
      };
    case DISPLAYED_TOAST:
      console.log('displayed toast', action.payload);
      console.log({ pendingToasts });
      pendingToasts = pendingToasts.filter(toast => toast.id !== action.payload);
      return {
        pendingToasts,
      };
    default:
      return state;
  }
};

const createToast = (type: string, message: string) => ({
  id: uuidv4(),
  type,
  message,
});

export default ToastReducer;
