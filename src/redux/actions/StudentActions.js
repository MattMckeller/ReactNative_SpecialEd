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
  RETRIEVE_STUDENT_DETAILS_START,
  RETRIEVE_STUDENT_DETAILS_SUCCESS,
  RETRIEVE_STUDENT_DETAILS_FAIL,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAIL,
  ADD_STUDENT_START,
  ADD_NEW_ERROR_TOAST,
} from './types';
import { STUDENT_LIST_TEST_DATA } from '../../../extra/testData/students';
import type { StudentInterface } from '../../data-models/student/Student.interface';
import {
  ALL_STUDENT_NOTES_TEST_DATA,
  MY_STUDENT_NOTES_TEST_DATA,
} from '../../../extra/testData/notes';
import { STUDENT_GOAL_TEST_DATA } from '../../../extra/testData/goals';
import { STUDENT_ATTENDANCE_RECORD_TEST_DATA } from '../../../extra/testData/attendanceRecords';

// todo based on current authenticated user
export const retrieveStudents = () => (dispatch) => {
  console.log('retrieve students start');
  dispatch({
    type: RETRIEVE_STUDENTS_START,
    meta: { beginAsyncRequest: true },
  });

  // todo implement backend calls
  setTimeout(() => {
    retrieveStudentsSuccess(dispatch, STUDENT_LIST_TEST_DATA);
  }, 10);

  // setTimeout(() => {
  //   retrieveStudentsFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

export const retrieveStudentDetails = (student: StudentInterface) => (dispatch) => {
  console.log('retrieve student details start');
  dispatch({
    type: RETRIEVE_STUDENT_DETAILS_START,
    meta: { beginAsyncRequest: true },
  });

  // get details data
  const foundStudent = STUDENT_LIST_TEST_DATA.find(item => item.id === student.id);
  foundStudent.notes = ALL_STUDENT_NOTES_TEST_DATA;
  foundStudent.goals = STUDENT_GOAL_TEST_DATA;
  foundStudent.attendanceRecords = STUDENT_ATTENDANCE_RECORD_TEST_DATA;

  // todo implement backend calls
  setTimeout(() => {
    retrieveStudentDetailsSuccess(dispatch, foundStudent);
  }, 10);

  // setTimeout(() => {
  //   retrieveStudentDetailsFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

export const retrieveSingleStudentPdf = (student: StudentInterface) => (dispatch) => {
  dispatch({
    type: RETRIEVE_SINGLE_STUDENT_PDF_START,
    payload: student,
    meta: { beginAsyncRequest: true },
  });

  // todo implement backend calls
  setTimeout(() => {
    retrieveSingleStudentPdfSuccess(dispatch, STUDENT_ATTENDANCE_RECORD_TEST_DATA);
  }, 10);

  // setTimeout(() => {
  //   retrieveSingleStudentPdfFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

export const retrieveMultipleStudentsPdf = (student: StudentInterface) => (dispatch) => {
  dispatch({
    type: RETRIEVE_MULTIPLE_STUDENT_PDF_START,
    payload: student,
    meta: { beginAsyncRequest: true },
  });

  // todo implement backend calls
  setTimeout(() => {
    retrieveMultipleStudentPdfSuccess(dispatch, STUDENT_ATTENDANCE_RECORD_TEST_DATA);
  }, 10);

  // setTimeout(() => {
  //   retrieveMultipleStudentPdfFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};


export const doAddStudent = (student: StudentInterface) => (dispatch) => {
  console.log('retrieve student details start');
  dispatch({
    type: ADD_STUDENT_START,
    meta: { beginAsyncRequest: true },
  });

  // todo implement backend calls
  // setTimeout(() => {
  //   dispatch({
  //     type: ADD_STUDENT_SUCCESS,
  //     payload: student,
  //     meta: { finishAsyncRequest: true },
  //   });
  // }, 10);

  setTimeout(() => {
    console.log('dispatch new error toast');
    dispatch({
      type: ADD_NEW_ERROR_TOAST,
      payload: { message: 'Add student failed (+ backend related information).' },
      meta: { finishAsyncRequest: true },
    });
  }, 10);
};

const retrieveStudentsSuccess = (dispatch, students) => {
  dispatch({
    type: RETRIEVE_STUDENTS_SUCCESS,
    payload: students,
    meta: { finishAsyncRequest: true },
  });
};

const retrieveStudentDetailsSuccess = (dispatch, student) => {
  dispatch({
    type: RETRIEVE_STUDENT_DETAILS_SUCCESS,
    payload: student,
    meta: { finishAsyncRequest: true },
  });
};

const retrieveSingleStudentPdfSuccess = (dispatch, pdfData) => {
  dispatch({
    type: RETRIEVE_SINGLE_STUDENT_PDF_SUCCESS,
    payload: pdfData,
    meta: { finishAsyncRequest: true },
  });
};

const retrieveMultipleStudentPdfSuccess = (dispatch, pdfData) => {
  dispatch({
    type: RETRIEVE_MULTIPLE_STUDENT_PDF_SUCCESS,
    payload: pdfData,
    meta: { finishAsyncRequest: true },
  });
};

const retrieveStudentsFail = (dispatch) => {
  dispatch({
    type: RETRIEVE_STUDENTS_FAIL,
    payload: { error: 'Error from backend.' },
    meta: { finishAsyncRequest: true },
  });
};

const retrieveStudentDetailsFail = (dispatch) => {
  dispatch({
    type: RETRIEVE_STUDENT_DETAILS_FAIL,
    payload: { error: 'Error from backend.' },
    meta: { finishAsyncRequest: true },
  });
};

const retrieveSingleStudentPdfFail = (dispatch) => {
  dispatch({
    type: RETRIEVE_SINGLE_STUDENT_PDF_FAIL,
    payload: { error: 'Error from backend.' },
    meta: { finishAsyncRequest: true },
  });
};

const retrieveMultipleStudentPdfFail = (dispatch) => {
  dispatch({
    type: RETRIEVE_MULTIPLE_STUDENT_PDF_FAIL,
    payload: { error: 'Error from backend.' },
    meta: { finishAsyncRequest: true },
  });
};
