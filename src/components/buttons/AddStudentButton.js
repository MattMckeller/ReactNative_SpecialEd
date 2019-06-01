// @flow
import React from 'react';
import ActionButton from '../shared/common/ActionButton';
import styleVariables from '../../assets/StyleVariables';

type Props = {
  onPress: () => any,
}
function AddStudentButton(props: Props) {
  const { onPress } = props;
  const { editNoteActionButtonColor } = styleVariables;
  return (
    <ActionButton
      onPress={onPress}
      iconColor={editNoteActionButtonColor}
      iconName="comment-dots"
      label="Edit Note"
    />
  );
}

AddStudentButton.defaultProps = {};

export default AddStudentButton;
