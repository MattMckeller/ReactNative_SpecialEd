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

function GradeInput({
  formName,
  onErrorStateChange,
  label,
  forceErrorDisplay,
  validationRules,
}: Props) {
  const options = [
    { label: 'Kindergarden', value: '0' },
    { label: 'First Grade', value: '1' },
    { label: 'Second Grade', value: '2' },
    { label: 'Third Grade', value: '3' },
    { label: 'Fourth Grade', value: '4' },
    { label: 'Fifth Grade', value: '5' },
    { label: 'Sixth Grade', value: '6' },
    { label: 'Seventh Grade', value: '7' },
    { label: 'Eighth Grade', value: '8' },
    { label: 'Highschool Freshman', value: '9' },
    { label: 'Highschool Sophomore', value: '10' },
    { label: 'Highschool Junior', value: '11' },
    { label: 'Highschool Senior', value: '12' },
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

GradeInput.defaultProps = {
  required: true,
  fieldName: 'Student Grade',
  label: 'Student Grade',
  validationRules: [],
};

export default validationRuleHandler(GradeInput, {
  defaultRequired: GradeInput.defaultProps.required,
  defaultFieldName: GradeInput.defaultProps.fieldName,
  defaultValidationRules: GradeInput.defaultProps.validationRules,
});
