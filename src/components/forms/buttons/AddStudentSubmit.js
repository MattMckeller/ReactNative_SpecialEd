// @flow
import React from 'react';
import RoundedButton from '../../shared/common/RoundedButton';

type Props = {
  onPress: () => any;
  disabled: boolean;
  label?: string;
  height?: string | number;
}

function AddStudentSubmit({
  onPress, disabled, label, height,
}: Props) {
  return (
    <RoundedButton
      onPress={onPress}
      disabled={disabled}
      label={label}
      height={height}
    />
  );
}

AddStudentSubmit.defaultProps = {
  label: 'Add Student',
  height: 60,
};

export default AddStudentSubmit;
