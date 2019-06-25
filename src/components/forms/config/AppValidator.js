// @flow
import Validate from '../../../utility/validation/Validate';

export const AppValidator = (rules: any[]) => {
  return (v) => {
    const result = Validate(v, rules);
    console.log('doing validation for value ', v, result);
    return result;
  };
};
