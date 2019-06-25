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
  SELECTED_STUDENT,
  STUDENT_LIST_DID_DISPLAY_ERROR_TOAST,
  STUDENT_PROFILE_DID_DISPLAY_ERROR_TOAST, SELECTED_STUDENT_FROM_LIST,
} from '../actions/types';
import { ERROR_CODES, ERROR_CONFIG } from '../../config/errors.config';

// todo maybe break this up into separate vars
const INITIAL_STATE = {
  students: [],
  selectedStudent: null,
  lastFetchedStudentId: null,
  shouldOpenStudentListErrorToast: false,
  shouldOpenStudentProfileNotesErrorToast: false,
  retrieveStudentsError: '',
  retrieveStudentError: '',
  retrieveNotesError: '',
  addStudentError: '',
};
const StudentsReducer = (state = INITIAL_STATE, { type, payload }) => {
  const { students } = state;
  switch (type) {
    case RETRIEVE_STUDENTS_START:
      return { ...state, retrieveStudentsError: '' };
    case RETRIEVE_STUDENTS_SUCCESS:
      return {
        ...state,
        retrieveStudentsError: '',
        // ...INITIAL_STATE, // todo determine if things need to be reset
        students: payload,
      };
    case RETRIEVE_STUDENTS_FAIL:
      return {
        ...state,
        shouldOpenStudentListErrorToast: true,
        retrieveStudentsError: (payload && payload.error)
          ? (payload.error)
          : ERROR_CONFIG[ERROR_CODES.RETRIEVE_STUDENT_DEFAULT],
      };
    case STUDENT_LIST_DID_DISPLAY_ERROR_TOAST:
      return {
        ...state,
        shouldOpenStudentListErrorToast: false,
      };
    case SELECTED_STUDENT_FROM_LIST:
      return {
        ...state,
        selectedStudent: payload,
      };
    case RETRIEVE_STUDENT_DETAILS_SUCCESS:
      // todo add other events for details
      return {
        ...state,
        selectedStudent: payload,
        lastFetchedStudentId: (payload && payload.id) ? payload.id : null,
      };
    case ADD_STUDENT_START:
      // TODO ERROR HANDLING?
      return {
        ...state,
        addStudentError: '',
      };
    case ADD_STUDENT_SUCCESS:
      // TODO ERROR HANDLING
      if (!students.find(s => s.id === payload.id)) { students.push(payload); }
      return {
        ...state,
        students,
      };
    case ADD_STUDENT_FAIL:
      // TODO ERROR HANDLING & toast handling
      if (!students.find(s => s.id === payload.id)) { students.push(payload); }
      return {
        ...state,
        // shouldOpenStudentListErrorToast: true,
        addStudentError: (payload && payload.error)
          ? (payload.error)
          : ERROR_CONFIG[ERROR_CODES.ADD_STUDENT_DEFAULT],
      };
    default:
      return state;
  }
};

export default StudentsReducer;
