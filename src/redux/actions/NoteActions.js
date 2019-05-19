// @flow
import {
  ADD_STUDENT_NOTE_START,
  ADD_STUDENT_NOTE_SUCCESS,
  ADD_STUDENT_NOTE_FAIL,
  EDIT_STUDENT_NOTE_START,
  EDIT_STUDENT_NOTE_SUCCESS,
  EDIT_STUDENT_NOTE_FAIL,
  DELETE_STUDENT_NOTE_START,
  DELETE_STUDENT_NOTE_SUCCESS,
  DELETE_STUDENT_NOTE_FAIL,
} from './types';
import type { NoteInterface } from '../../data-models/note/Note.interface';

export const addStudentNote = (note: NoteInterface) => (dispatch) => {
  dispatch({ type: ADD_STUDENT_NOTE_START, payload: note });

  // todo implement backend calls
  setTimeout(() => {
    addStudentNoteSuccess(dispatch, note);
  }, 10);

  // setTimeout(() => {
  //   addStudentNoteFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

export const editStudentNote = (note: NoteInterface) => (dispatch) => {
  dispatch({ type: EDIT_STUDENT_NOTE_START, payload: note });

  // todo implement backend calls
  setTimeout(() => {
    editStudentNoteSuccess(dispatch, note);
  }, 10);

  // setTimeout(() => {
  //   editStudentNoteFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};
export const deleteStudentNote = (note: NoteInterface) => (dispatch) => {
  dispatch({ type: DELETE_STUDENT_NOTE_START, payload: note });

  // todo implement backend calls
  setTimeout(() => {
    deleteStudentNoteSuccess(dispatch, note);
  }, 10);

  // setTimeout(() => {
  //   deleteStudentNoteFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

const addStudentNoteSuccess = (dispatch, note) => {
  dispatch({ type: ADD_STUDENT_NOTE_SUCCESS, payload: note });
};

const addStudentNoteFail = (dispatch) => {
  dispatch({
    type: ADD_STUDENT_NOTE_FAIL,
    payload: { error: 'Error from backend.' },
  });
};

const editStudentNoteSuccess = (dispatch, note) => {
  dispatch({ type: EDIT_STUDENT_NOTE_SUCCESS, payload: note });
};

const editStudentNoteFail = (dispatch) => {
  dispatch({
    type: EDIT_STUDENT_NOTE_FAIL,
    payload: { error: 'Error from backend.' },
  });
};

const deleteStudentNoteSuccess = (dispatch) => {
  dispatch({ type: DELETE_STUDENT_NOTE_SUCCESS, payload: null });
};

const deleteStudentNoteFail = (dispatch) => {
  dispatch({
    type: DELETE_STUDENT_NOTE_FAIL,
    payload: { error: 'Error from backend.' },
  });
};
