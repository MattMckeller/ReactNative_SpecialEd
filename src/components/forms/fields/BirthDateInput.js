// @flow
import React from 'react';
import { Field } from 'redux-form';
import { DefaultInput } from '../config/DefaultInput';
import validationRuleHandler from '../hoc/ValidationRuleHandler';

type Props = {
  formName: string;
  onErrorStateChange: () => any;
  forceErrorDisplay: boolean,
  label?: string;
  validationRules?: [],
  required?: boolean, // eslint-disable-line
  fieldName?: string, // eslint-disable-line
}
function BirthDateInput({
  formName,
  onErrorStateChange,
  label,
  forceErrorDisplay,
  validationRules,
}: Props) {
  return (
    <Field
      name={formName}
      onErrorStateChange={onErrorStateChange}
      label={label}
      component={DefaultInput}
      validate={validationRules}
      forceErrorDisplay={forceErrorDisplay}
    />
  );
}

BirthDateInput.defaultProps = {
  required: true,
  fieldName: 'Birth Date',
  label: 'Birth Date',
  validationRules: [],
};

export default validationRuleHandler(BirthDateInput, {
  defaultRequired: BirthDateInput.defaultProps.required,
  defaultFieldName: BirthDateInput.defaultProps.fieldName,
  defaultValidationRules: BirthDateInput.defaultProps.validationRules,
});
