// @flow
import React from 'react';
import ActionButton from '../../shared/common/ActionButton';
import styleVariables from '../../../assets/StyleVariables';

type Props = {
  onPress: () => any,
}

function DeleteStudentButton(props: Props) {
  const { onPress } = props;
  const { deleteStudentActionButtonColor } = styleVariables;
  return (
    <ActionButton
      onPress={onPress}
      iconColor={deleteStudentActionButtonColor}
      iconName="user-minus"
      label="Delete Student"
    />
  );
}

DeleteStudentButton.defaultProps = {};

export default DeleteStudentButton;
