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

const INITIAL_STATE = {
  students: [],
  selectedStudent: null,
  shouldOpenStudentListErrorToast: false,
  shouldOpenStudentProfileNotesErrorToast: false,
  retrieveNotesProcessing: false,
  retrieveStudentsProcessing: false,
  retrieveStudentProcessing: false,
  retrieveStudentsError: '',
  retrieveStudentError: '',
  retrieveNotesError: '',
};
const StudentsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_STUDENTS_START:
      return { ...state, retrieveStudentsProcessing: true, error: '' };
    case RETRIEVE_STUDENTS_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        students: payload,
      };
    case RETRIEVE_STUDENTS_FAIL:
      return {
        ...state,
        loading: false,
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
    default:
      return state;
  }
};

export default StudentsReducer;
