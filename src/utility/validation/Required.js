// @flow
import type {
  Validator, ValidatorFactory, ValidatorResponse,
} from './Validate';
import { ValidatorBase } from './Validate';
import { REQUIRED_ERROR_MESSAGE } from './RuleMessages';

class RequiredInstance extends ValidatorBase {
  validate(): ValidatorResponse {
    if (this._value && this._value.toString().length) {
      return true;
    }
    return REQUIRED_ERROR_MESSAGE(this._fieldName || 'Field');
  }
}

const Required: ValidatorFactory = (params: { fieldName?: string }): Validator => {
  const instance = new RequiredInstance();
  instance.setFieldName(params.fieldName);
  return instance;
};

export default Required;
