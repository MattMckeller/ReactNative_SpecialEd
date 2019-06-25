// @flow
import React from 'react';
import { Field } from 'redux-form';
import { DefaultPicker } from '../config/DefaultPicker';
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

function SchoolInput({
  formName,
  onErrorStateChange,
  label,
  forceErrorDisplay,
  validationRules,
}: Props) {
  // todo will need to map from name to label
  const options = [
    { label: 'Todo', value: '0' },
    { label: 'School One', value: '1' },
    { label: 'School Two', value: '2' },
    { label: 'School Three', value: '3' },
  ];
  return (
    <Field
      name={formName}
      onErrorStateChange={onErrorStateChange}
      label={label}
      component={DefaultPicker}
      validate={validationRules}
      options={options}
      forceErrorDisplay={forceErrorDisplay}
    />
  );
}

SchoolInput.defaultProps = {
  required: true,
  fieldName: 'School Name',
  label: 'School Name',
  validationRules: [],
};

export default validationRuleHandler(SchoolInput, {
  defaultRequired: SchoolInput.defaultProps.required,
  defaultFieldName: SchoolInput.defaultProps.fieldName,
  defaultValidationRules: SchoolInput.defaultProps.validationRules,
});
