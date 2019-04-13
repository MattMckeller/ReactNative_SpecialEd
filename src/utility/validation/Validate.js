// @flow

export type ValidatorValue = string | number | undefined;
export type ValidatorFieldName = string;
export type ValidatorResponse = boolean | string;

export interface Validator {
  _value: ValidatorValue;
  _fieldName: ValidatorFieldName;
  setValue(value: ValidatorValue): void;
  setFieldName(fieldName: ValidatorFieldName): void;
  validate(): ValidatorResponse;
}
export class ValidatorBase implements Validator {
  _value: ValidatorValue = '';

  _fieldName: ValidatorFieldName = '';

  setValue(value: ValidatorValue): void {
    this._value = value;
  }

  setFieldName(fieldName: ValidatorFieldName): void {
    this._fieldName = fieldName;
  }

  validate(): ValidatorResponse {
    return true;
  }
}
export type ValidatorFactory = (params: any) => Validator;

const Validate = (
  value: ValidatorValue,
  rules: Validator[],
): boolean | string[] => {
  const errors = [];
  rules.forEach((rule: Validator) => {
    rule.setValue(value);
    const ruleResponse = rule.validate();
    if (ruleResponse !== true) {
      errors.push(ruleResponse);
    }
  });

  return (errors.length > 0) ? errors[0] : undefined;
};

export default Validate;
