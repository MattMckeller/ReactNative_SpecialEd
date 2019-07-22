// @flow
import Validate from '../../../utility/validation/Validate';

export const AppValidator = (rules: any[]) => (v) => {
  return Validate(v, rules);
};
