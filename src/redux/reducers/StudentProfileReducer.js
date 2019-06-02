import { ERROR_CODES, ERROR_CONFIG } from '../../config/errors.config';
import {
  RETRIEVE_STUDENTS_FAIL, RETRIEVE_STUDENTS_START,
  RETRIEVE_STUDENTS_SUCCESS, SELECTED_STUDENT_FROM_LIST,
  STUDENT_LIST_DID_DISPLAY_ERROR_TOAST,
} from '../actions';

const INITIAL_STATE = {
  notes: [],
  shouldOpenStudentProfileErrorToast: false,
  retrieveStudentError: '',
  retrieveMyStudentNotesError: '',
  retrieveAllStudentNotesError: '',
};
const StudentsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_STUDENTS_START:
      return { ...state, retrieveStudentError: '' };
    case RETRIEVE_STUDENTS_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        students: payload,
      };
    case RETRIEVE_STUDENTS_FAIL:
      return {
        ...state,
        shouldOpenStudentListErrorToast: true,
        retrieveStudentError: (payload && payload.error)
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
