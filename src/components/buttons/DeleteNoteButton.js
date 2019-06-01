// @flow
import React from 'react';
import ActionButton from '../shared/common/ActionButton';
import styleVariables from '../../assets/StyleVariables';

type Props = {
  onPress: () => any,
}

function DeleteNoteButton(props: Props) {
  const { onPress } = props;
  const { deleteNoteActionButtonColor } = styleVariables;
  return (
    <ActionButton
      onPress={onPress}
      iconColor={deleteNoteActionButtonColor}
      iconName="comment-slash"
      label="Delete Note"
    />
  );
}

DeleteNoteButton.defaultProps = {};

export default DeleteNoteButton;
