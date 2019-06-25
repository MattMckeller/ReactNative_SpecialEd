// @flow
import React from 'react';
import { Field } from 'redux-form';
import validationRuleHandler from '../hoc/ValidationRuleHandler';
import { DefaultPicker } from '../config/DefaultPicker';

type Props = {
  formName: string;
  onErrorStateChange: () => any;
  forceErrorDisplay: boolean,
  required?: boolean; // eslint-disable-line
  fieldName?: string; // eslint-disable-line
  label?: string;
  validationRules?: [],
}

function GenderInput({
  formName,
  onErrorStateChange,
  label,
  forceErrorDisplay,
  validationRules,
}: Props) {
  const options = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other/Unspecified', value: 'Other' },
  ];
  return (
    <Field
      name={formName}
      onErrorStateChange={onErrorStateChange}
      label={label}
      component={DefaultPicker}
      validate={validationRules}
      forceErrorDisplay={forceErrorDisplay}
      options={options}
    />
  );
}

GenderInput.defaultProps = {
  required: true,
  fieldName: 'Gender',
  label: 'Gender',
  validationRules: [],
};

export default validationRuleHandler(GenderInput, {
  defaultRequired: GenderInput.defaultProps.required,
  defaultFieldName: GenderInput.defaultProps.fieldName,
  defaultValidationRules: GenderInput.defaultProps.validationRules,
});
