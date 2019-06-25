// @flow
import React from 'react';
import { Field } from 'redux-form';
import { DefaultInput } from '../config/DefaultInput';
import validationRuleHandler from '../hoc/ValidationRuleHandler';

type Props = {
  formName: string;
  onErrorStateChange: () => any;
  forceErrorDisplay: boolean,
  required?: boolean; // eslint-disable-line
  fieldName?: string; // eslint-disable-line
  label?: string;
  validationRules?: [],
}

function LastNameInput({
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

LastNameInput.defaultProps = {
  required: true,
  fieldName: 'Last Name',
  label: 'Last Name',
  validationRules: [],
};

export default validationRuleHandler(LastNameInput, {
  defaultRequired: LastNameInput.defaultProps.required,
  defaultFieldName: LastNameInput.defaultProps.fieldName,
  defaultValidationRules: LastNameInput.defaultProps.validationRules,
});
