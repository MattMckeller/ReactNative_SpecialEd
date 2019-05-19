// @flow
import {
  RECORD_STUDENT_ATTENDANCE_START,
  RECORD_STUDENT_ATTENDANCE_SUCCESS,
  RECORD_STUDENT_ATTENDANCE_FAIL,
  DELETE_STUDENT_ATTENDANCE_START,
  DELETE_STUDENT_ATTENDANCE_SUCCESS,
  DELETE_STUDENT_ATTENDANCE_FAIL,
} from './types';
import type { NoteInterface } from '../../data-models/note/Note.interface';

export const recordStudentAttendanceRecord = (note: NoteInterface) => (dispatch) => {
  dispatch({ type: RECORD_STUDENT_ATTENDANCE_START, payload: note });

  // todo implement backend calls
  setTimeout(() => {
    recordStudentAttendanceRecordSuccess(dispatch, note);
  }, 10);

  // setTimeout(() => {
  //   recordStudentAttendanceRecordFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

export const deleteStudentAttendanceRecord = (note: NoteInterface) => (dispatch) => {
  dispatch({ type: DELETE_STUDENT_ATTENDANCE_START, payload: note });

  // todo implement backend calls
  setTimeout(() => {
    deleteStudentAttendanceRecordSuccess(dispatch, note);
  }, 10);

  // setTimeout(() => {
  //   deleteStudentAttendanceRecordFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

const recordStudentAttendanceRecordSuccess = (dispatch, note) => {
  dispatch({ type: RECORD_STUDENT_ATTENDANCE_SUCCESS, payload: note });
};

const recordStudentAttendanceRecordFail = (dispatch) => {
  dispatch({
    type: RECORD_STUDENT_ATTENDANCE_FAIL,
    payload: { error: 'Error from backend.' },
  });
};

const deleteStudentAttendanceRecordSuccess = (dispatch) => {
  dispatch({ type: DELETE_STUDENT_ATTENDANCE_SUCCESS, payload: null });
};

const deleteStudentAttendanceRecordFail = (dispatch) => {
  dispatch({
    type: DELETE_STUDENT_ATTENDANCE_FAIL,
    payload: { error: 'Error from backend.' },
  });
};
