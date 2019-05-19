// @flow
import {
  STUDENT_PROFILE_DID_DISPLAY_ERROR_TOAST,
} from './types';

export const didShowStudentProfileErrorToast = () => ({
  type: STUDENT_PROFILE_DID_DISPLAY_ERROR_TOAST,
  payload: null,
});
