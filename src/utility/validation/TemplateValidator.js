// @flow
import type {
  Validator, ValidatorFactory, ValidatorResponse,
} from './Validate';
import { ValidatorBase } from './Validate';
import { GENERAL_ERROR_MESSAGE } from './RuleMessages';


class TemplateInstance extends ValidatorBase {
  validate(): ValidatorResponse {
    if (this._value.toString().length) {
      return true;
    }
    return GENERAL_ERROR_MESSAGE;
  }
}

const Template: ValidatorFactory = (params: any): Validator => new TemplateInstance();

export default Template;
