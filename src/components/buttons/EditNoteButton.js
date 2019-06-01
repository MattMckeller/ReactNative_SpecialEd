// @flow
import React from 'react';
import ActionButton from '../shared/common/ActionButton';
import styleVariables from '../../assets/StyleVariables';

type Props = {
  onPress: () => any,
}

function EditNoteButton(props: Props) {
  const { onPress } = props;
  const { editNoteActionButtonColor } = styleVariables;
  return (
    <ActionButton
      onPress={onPress}
      iconColor={editNoteActionButtonColor}
      iconName="comment-dots"
      label="Edit Note"
      keyName="edit-note-button"
    />
  );
}

EditNoteButton.defaultProps = {};

export default EditNoteButton;
