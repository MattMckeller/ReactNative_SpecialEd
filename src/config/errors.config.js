// @flow
export const ERROR_CODES = {
  RETRIEVE_STUDENT_DEFAULT: 0,
  ADD_STUDENT_DEFAULT: 1,
};

export interface ErrorInterface {
  message: string,
}

export const ERROR_CONFIG = {
  [ERROR_CODES.RETRIEVE_STUDENT_DEFAULT]: {
    message: 'An error occurred when trying to retrieve the students.',
  },
  [ERROR_CODES.ADD_STUDENT_DEFAULT]: {
    message: 'An error occurred when trying to add the student.',
  },
};
