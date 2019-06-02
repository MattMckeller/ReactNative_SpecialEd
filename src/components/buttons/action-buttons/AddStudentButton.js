// @flow
import React from 'react';
import ActionButton from '../../shared/common/ActionButton';
import styleVariables from '../../../assets/StyleVariables';

type Props = {
  onPress: () => any,
}

function AddStudentButton(props: Props) {
  const { onPress } = props;
  const { addStudentButtonColor } = styleVariables;
  return (
    <ActionButton
      onPress={onPress}
      iconColor={addStudentButtonColor}
      iconName="user-plus"
      label="Add Student"
    />
  );
}

AddStudentButton.defaultProps = {};

export default AddStudentButton;
