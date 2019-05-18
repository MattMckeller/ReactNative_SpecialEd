// @flow
import {
  RETRIEVE_STUDENTS_START,
  RETRIEVE_STUDENTS_SUCCESS,
  RETRIEVE_STUDENTS_FAIL,
  RETRIEVE_STUDENT_DETAILS_START, // TODO decide how backend calls will be broken down
  RETRIEVE_STUDENT_DETAILS_SUCCESS,
  RETRIEVE_STUDENT_DETAILS_FAIL,
  UPDATE_STUDENT_START,
  UPDATE_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAIL,
  ADD_STUDENT_START,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAIL,
  DELETE_STUDENT_START,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAIL,
  SELECTED_STUDENT_FROM_LIST,
  STUDENT_LIST_DID_DISPLAY_ERROR_TOAST,
  STUDENT_PROFILE_DID_DISPLAY_ERROR_TOAST, LOGIN_USER_SUCCESS,
} from './types';
import { STUDENT_LIST_TEST_DATA } from '../../../extra/testData/students';
import type {StudentInterface} from "../../data-models/student/Student.interface";
import {Actions} from "react-native-router-flux";

// todo based on current authenticated user
export const retrieveStudents = () => (dispatch) => {
  console.log('retrieve students start');
  dispatch({ type: RETRIEVE_STUDENTS_START });

  // todo implement backend calls
  setTimeout(() => {
    retrieveStudentsSuccess(dispatch, STUDENT_LIST_TEST_DATA);
  }, 1000);
  console.log('auth action');

  // setTimeout(() => {
  //   retrieveStudentsFail(dispatch, { error: 'An error has occurred.' });
  // }, 1000);
};

export const selectedStudentFromList = (student: StudentInterface) => (dispatch) => {
  console.log('selected student from list', student);
  dispatch({ type: SELECTED_STUDENT_FROM_LIST, payload: student });
  Actions.studentProfileNotes();
};

const retrieveStudentsSuccess = (dispatch, students) => {
  dispatch({ type: RETRIEVE_STUDENTS_SUCCESS, payload: students });
};

const retrieveStudentsFail = (dispatch) => {
  dispatch({
    type: RETRIEVE_STUDENTS_FAIL,
    payload: { error: 'Error from backend.' },
  });
};

export const didShowStudentListErrorToast = () => ({
  type: STUDENT_LIST_DID_DISPLAY_ERROR_TOAST,
  payload: null,
});
