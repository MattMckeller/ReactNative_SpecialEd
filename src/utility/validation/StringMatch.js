// @flow
import type {
  Validator, ValidatorFactory, ValidatorResponse,
} from './Validate';
import { ValidatorBase } from './Validate';
import {GENERAL_INVALID_ERROR_MESSAGE, STRING_MATCH_ERROR_MESSAGE} from './RuleMessages';

class StringMatchInstance extends ValidatorBase {
  valueToMatch: string;

  isValidWhenMatchIsEmpty: boolean;

  secondFieldName: boolean;

  validate(): ValidatorResponse {
    const value = this._value && this._value.toString();
    if (value && value.length) {
      const valueToMatch = this.valueToMatch.toString();
      if (valueToMatch.length === 0 && this.isValidWhenMatchIsEmpty) {
        return true;
      }
      return (valueToMatch !== value)
        ? STRING_MATCH_ERROR_MESSAGE(this._fieldName || 'Field', this.secondFieldName || 'another field')
        : true;
    }
    return GENERAL_INVALID_ERROR_MESSAGE(this._fieldName || 'Field');
  }
}

const StringMatch: ValidatorFactory = (params: {
  fieldName?: string,
  secondFieldName: string,
  valueToMatch: string,
  isValidWhenMatchIsEmpty: boolean,
}): Validator => {
  const instance = new StringMatchInstance();
  instance.setFieldName(params.fieldName);
  instance.isValidWhenMatchIsEmpty = params.isValidWhenMatchIsEmpty;
  instance.secondFieldName = params.secondFieldName;
  instance.valueToMatch = params.valueToMatch;

  return instance;
};

export default StringMatch;
