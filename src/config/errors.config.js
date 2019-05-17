// @flow
export const ERROR_CODES = {
  RETRIEVE_STUDENT_DEFAULT: 0,
};

export interface ErrorInterface {
  message: string,
}

export const ERROR_CONFIG = {
  [ERROR_CODES.RETRIEVE_STUDENT_DEFAULT]: {
    message: 'Error retrieving students.',
  },
};
