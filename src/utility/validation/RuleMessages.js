import TemplateTag from '../TemplateTag';

export const GENERAL_ERROR_MESSAGE = 'An error has occurred.';
export const GENERAL_INVALID_ERROR_MESSAGE = TemplateTag`${0} is invalid.`;
export const REQUIRED_ERROR_MESSAGE = TemplateTag`${0} is required.`;
export const MIN_LENGTH_ERROR_MESSAGE = TemplateTag`${0} must be at least ${1} characters long.`;
export const STRING_MATCH_ERROR_MESSAGE = TemplateTag`${0} field must match ${1}.`;
