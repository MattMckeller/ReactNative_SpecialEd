// @flow
import {
  RETRIEVE_STUDENTS_START,
  RETRIEVE_STUDENTS_SUCCESS,
  RETRIEVE_STUDENTS_FAIL,
  RETRIEVE_MY_STUDENT_NOTES_START,
  RETRIEVE_ALL_STUDENT_NOTES_START,
  RETRIEVE_MY_STUDENT_NOTES_SUCCESS,
  RETRIEVE_ALL_STUDENT_NOTES_SUCCESS,
  RETRIEVE_MY_STUDENT_NOTES_FAIL,
  RETRIEVE_ALL_STUDENT_NOTES_FAIL,
  EXPORT_STUDENT_INFORMATION_TO_PDF_START,
  EXPORT_STUDENT_INFORMATION_TO_PDF_SUCCESS,
  EXPORT_STUDENT_INFORMATION_TO_PDF_FAIL,
  RETRIEVE_STUDENT_GOALS_START,
  RETRIEVE_STUDENT_GOALS_SUCCESS,
  RETRIEVE_STUDENT_GOALS_FAIL,
  RETRIEVE_STUDENT_ATTENDANCE_START,
  RETRIEVE_STUDENT_ATTENDANCE_SUCCESS,
  RETRIEVE_STUDENT_ATTENDANCE_FAIL,
  RETRIEVE_SINGLE_STUDENT_PDF_START,
  RETRIEVE_MULTIPLE_STUDENT_PDF_START,
  RETRIEVE_MULTIPLE_STUDENT_PDF_FAIL,
  RETRIEVE_SINGLE_STUDENT_PDF_FAIL,
  RETRIEVE_SINGLE_STUDENT_PDF_SUCCESS,
  RETRIEVE_MULTIPLE_STUDENT_PDF_SUCCESS,
} from './types';
import { STUDENT_LIST_TEST_DATA } from '../../../extra/testData/students';
import type { StudentInterface } from '../../data-models/student/Student.interface';
import { ALL_STUDENT_NOTES_TEST_DATA, MY_STUDENT_NOTES_TEST_DATA } from '../../../extra/testData/notes';
import { STUDENT_GOAL_TEST_DATA } from '../../../extra/testData/goals';
import { STUDENT_ATTENDANCE_RECORD_TEST_DATA } from '../../../extra/testData/attendanceRecords';

// todo based on current authenticated user
export const retrieveStudents = () => (dispatch) => {
  console.log('retrieve students start');
  dispatch({ type: RETRIEVE_STUDENTS_START });

  // todo implement backend calls
  setTimeout(() => {
    retrieveStudentsSuccess(dispatch, STUDENT_LIST_TEST_DATA);
  }, 10);

  // setTimeout(() => {
  //   retrieveStudentsFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

// todo based on current authenticated user
export const retrieveMyStudentNotes = () => (dispatch) => {
  console.log('retrieve students start');
  dispatch({ type: RETRIEVE_MY_STUDENT_NOTES_START });

  // todo implement backend calls
  setTimeout(() => {
    retrieveMyStudentNotesSuccess(dispatch, MY_STUDENT_NOTES_TEST_DATA);
  }, 10);

  // setTimeout(() => {
  //   retrieveMyStudentNotesFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

export const retrieveAllStudentNotes = (student: StudentInterface) => (dispatch) => {
  dispatch({ type: RETRIEVE_ALL_STUDENT_NOTES_START, payload: student });
  // todo implement backend calls
  setTimeout(() => {
    retrieveAllStudentNotesSuccess(dispatch, ALL_STUDENT_NOTES_TEST_DATA);
  }, 10);

  // setTimeout(() => {
  //   retrieveAllStudentNotesFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

export const retrieveStudentGoals = (student: StudentInterface) => (dispatch) => {
  dispatch({ type: RETRIEVE_STUDENT_GOALS_START, payload: student });

  // todo implement backend calls
  setTimeout(() => {
    retrieveStudentGoalsSuccess(dispatch, STUDENT_GOAL_TEST_DATA);
  }, 10);

  // setTimeout(() => {
  //   retrieveStudentGoalsFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

export const retrieveStudentAttendanceRecords = (student: StudentInterface) => (dispatch) => {
  dispatch({ type: RETRIEVE_STUDENT_ATTENDANCE_START, payload: student });

  // todo implement backend calls
  setTimeout(() => {
    retrieveStudentAttendanceRecordsSuccess(dispatch, STUDENT_ATTENDANCE_RECORD_TEST_DATA);
  }, 10);

  // setTimeout(() => {
  //   retrieveStudentAttendanceRecordsFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

export const retrieveSingleStudentPdf = (student: StudentInterface) => (dispatch) => {
  dispatch({ type: RETRIEVE_SINGLE_STUDENT_PDF_START, payload: student });

  // todo implement backend calls
  setTimeout(() => {
    retrieveSingleStudentPdfSuccess(dispatch, STUDENT_ATTENDANCE_RECORD_TEST_DATA);
  }, 10);

  // setTimeout(() => {
  //   retrieveSingleStudentPdfFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

export const retrieveMultipleStudentsPdf = (student: StudentInterface) => (dispatch) => {
  dispatch({ type: RETRIEVE_MULTIPLE_STUDENT_PDF_START, payload: student });

  // todo implement backend calls
  setTimeout(() => {
    retrieveMultipleStudentPdfSuccess(dispatch, STUDENT_ATTENDANCE_RECORD_TEST_DATA);
  }, 10);

  // setTimeout(() => {
  //   retrieveMultipleStudentPdfFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

export

const retrieveStudentsSuccess = (dispatch, students) => {
  dispatch({ type: RETRIEVE_STUDENTS_SUCCESS, payload: students });
};

const retrieveMyStudentNotesSuccess = (dispatch, students) => {
  dispatch({ type: RETRIEVE_MY_STUDENT_NOTES_SUCCESS, payload: students });
};

const retrieveAllStudentNotesSuccess = (dispatch, students) => {
  dispatch({ type: RETRIEVE_ALL_STUDENT_NOTES_SUCCESS, payload: students });
};

const retrieveStudentGoalsSuccess = (dispatch, goals) => {
  dispatch({ type: RETRIEVE_STUDENT_GOALS_SUCCESS, payload: goals });
};

const retrieveStudentAttendanceRecordsSuccess = (dispatch, goals) => {
  dispatch({ type: RETRIEVE_STUDENT_ATTENDANCE_SUCCESS, payload: goals });
};

const retrieveSingleStudentPdfSuccess = (dispatch, pdfData) => {
  dispatch({ type: RETRIEVE_SINGLE_STUDENT_PDF_SUCCESS, payload: pdfData });
};

const retrieveMultipleStudentPdfSuccess = (dispatch, pdfData) => {
  dispatch({ type: RETRIEVE_MULTIPLE_STUDENT_PDF_SUCCESS, payload: pdfData });
};

const retrieveMyStudentNotesFail = (dispatch) => {
  dispatch({
    type: RETRIEVE_MY_STUDENT_NOTES_FAIL,
    payload: { error: 'Error from backend.' },
  });
};

const retrieveAllStudentNotesFail = (dispatch) => {
  dispatch({
    type: RETRIEVE_ALL_STUDENT_NOTES_FAIL,
    payload: { error: 'Error from backend.' },
  });
};

const retrieveStudentsFail = (dispatch) => {
  dispatch({
    type: RETRIEVE_STUDENTS_FAIL,
    payload: { error: 'Error from backend.' },
  });
};

const retrieveStudentGoalsFail = (dispatch) => {
  dispatch({
    type: RETRIEVE_STUDENT_GOALS_FAIL,
    payload: { error: 'Error from backend.' },
  });
};

const retrieveStudentAttendanceRecordsFail = (dispatch) => {
  dispatch({
    type: RETRIEVE_STUDENT_ATTENDANCE_FAIL,
    payload: { error: 'Error from backend.' },
  });
};

const retrieveSingleStudentPdfFail = (dispatch) => {
  dispatch({
    type: RETRIEVE_SINGLE_STUDENT_PDF_FAIL,
    payload: { error: 'Error from backend.' },
  });
};

const retrieveMultipleStudentPdfFail = (dispatch) => {
  dispatch({
    type: RETRIEVE_MULTIPLE_STUDENT_PDF_FAIL,
    payload: { error: 'Error from backend.' },
  });
};
