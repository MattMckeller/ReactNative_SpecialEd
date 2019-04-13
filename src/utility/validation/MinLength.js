// @flow
import type {
  Validator, ValidatorFactory, ValidatorResponse,
} from './Validate';
import { ValidatorBase } from './Validate';
import { MIN_LENGTH_ERROR_MESSAGE } from './RuleMessages';

class MinLengthInstance extends ValidatorBase {
  _length: number;

  validate(): ValidatorResponse {
    if (this._value && this._value.toString().length >= this._length) {
      return true;
    }
    return MIN_LENGTH_ERROR_MESSAGE(this._fieldName || 'Field', this._length);
  }

  setLength(value) {
    this._length = value;
  }
}

const MinLength: ValidatorFactory = (params: { length: number, fieldName?: string }): Validator => {
  const instance = new MinLengthInstance();
  instance.setFieldName(params.fieldName);
  instance.setLength(params.length);
  return instance;
};

export default MinLength;
