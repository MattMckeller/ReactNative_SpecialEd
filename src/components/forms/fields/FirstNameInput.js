// @flow
import React from 'react';
import { Field } from 'redux-form';
import { DefaultInput } from '../config/DefaultInput';
import validationRuleHandler from '../hoc/ValidationRuleHandler';

export type Props = {
  formName: string;
  onErrorStateChange: () => any;
  forceErrorDisplay: boolean,
  label?: string;
  validationRules?: [],
  required?: boolean, // eslint-disable-line
  fieldName?: string, // eslint-disable-line
}

const FirstNameInput = ({
  formName,
  onErrorStateChange,
  label,
  forceErrorDisplay,
  validationRules,
}: Props) => (
  <Field
    name={formName}
    onErrorStateChange={onErrorStateChange}
    label={label}
    component={DefaultInput}
    validate={validationRules}
    forceErrorDisplay={forceErrorDisplay}
  />
);
FirstNameInput.defaultProps = {
  required: true,
  fieldName: 'First Name',
  label: 'First Name',
  validationRules: [],
};

export default validationRuleHandler(FirstNameInput, {
  defaultRequired: FirstNameInput.defaultProps.required,
  defaultFieldName: FirstNameInput.defaultProps.fieldName,
  defaultValidationRules: FirstNameInput.defaultProps.validationRules,
});
