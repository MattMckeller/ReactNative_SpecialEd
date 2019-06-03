// @flow
import React from 'react';
import ActionButton from '../../shared/common/ActionButton';
import styleVariables from '../../../assets/StyleVariables';

type Props = {
  onPress: () => any,
}

function AddNoteButton(props: Props) {
  const { onPress } = props;
  const { addNoteActionButtonColor } = styleVariables;
  return (
    <ActionButton
      onPress={onPress}
      iconColor={addNoteActionButtonColor}
      iconName="comments" // todo comment-medical not working
      label="Add Note"
    />
  );
}

AddNoteButton.defaultProps = {};

export default AddNoteButton;
