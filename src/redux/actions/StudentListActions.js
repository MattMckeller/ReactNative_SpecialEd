// @flow
import { Actions } from 'react-native-router-flux';
import {
  RETRIEVE_MY_STUDENT_NOTES_START,
  RETRIEVE_MY_STUDENT_NOTES_SUCCESS,
  RETRIEVE_MY_STUDENT_NOTES_FAIL,
  RETRIEVE_ALL_STUDENT_NOTES_START,
  RETRIEVE_ALL_STUDENT_NOTES_SUCCESS,
  RETRIEVE_ALL_STUDENT_NOTES_FAIL,
  ADD_STUDENT_NOTE_START,
  ADD_STUDENT_NOTE_SUCCESS,
  ADD_STUDENT_NOTE_FAIL,
  EDIT_STUDENT_NOTE_START,
  EDIT_STUDENT_NOTE_SUCCESS,
  EDIT_STUDENT_NOTE_FAIL,
  DELETE_STUDENT_NOTE_START,
  DELETE_STUDENT_NOTE_SUCCESS,
  DELETE_STUDENT_NOTE_FAIL,
  ADD_STUDENT_GOAL_START,
  ADD_STUDENT_GOAL_SUCCESS,
  ADD_STUDENT_GOAL_FAIL,
  EDIT_STUDENT_GOAL_START,
  EDIT_STUDENT_GOAL_SUCCESS,
  EDIT_STUDENT_GOAL_FAIL,
  DELETE_STUDENT_GOAL_START,
  DELETE_STUDENT_GOAL_SUCCESS,
  DELETE_STUDENT_GOAL_FAIL,
  RECORD_STUDENT_ATTENDANCE_START,
  RECORD_STUDENT_ATTENDANCE_SUCCESS,
  RECORD_STUDENT_ATTENDANCE_FAIL,
  DELETE_STUDENT_ATTENDANCE_START,
  DELETE_STUDENT_ATTENDANCE_SUCCESS,
  DELETE_STUDENT_ATTENDANCE_FAIL,
  EXPORT_STUDENT_INFORMATION_TO_PDF_START,
  EXPORT_STUDENT_INFORMATION_TO_PDF_SUCCESS,
  EXPORT_STUDENT_INFORMATION_TO_PDF_FAIL,
  CLICK_ADD_STUDENT_NOTE,
  CLICK_EDIT_STUDENT_NOTE,
  CLICK_DELETE_STUDENT_NOTE,
  CLICK_ADD_STUDENT_GOAL,
  CLICK_EDIT_STUDENT_GOAL,
  CLICK_DELETE_STUDENT_GOAL,
  CLICK_RECORD_STUDENT_ATTENDANCE,
  CLICK_DELETE_STUDENT_ATTENDANCE,
  STUDENT_PROFILE_DID_DISPLAY_ERROR_TOAST, SELECTED_STUDENT_FROM_LIST, STUDENT_LIST_DID_DISPLAY_ERROR_TOAST,
} from './types';
import { MY_STUDENT_NOTES_TEST_DATA } from '../../../extra/testData/notes';
import type { StudentInterface } from '../../data-models/student/Student.interface';

export const selectedStudentFromList = (student: StudentInterface) => (dispatch) => {
  console.log('selected student from list', student);
  dispatch({ type: SELECTED_STUDENT_FROM_LIST, payload: student });
  Actions.studentProfileNotes();
};

export const didShowStudentListErrorToast = () => ({
  type: STUDENT_LIST_DID_DISPLAY_ERROR_TOAST,
  payload: null,
});