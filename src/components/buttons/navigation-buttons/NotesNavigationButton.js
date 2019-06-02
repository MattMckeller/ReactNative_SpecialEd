// @flow
import React from 'react';
import ActionButton from '../../shared/common/ActionButton';
import styleVariables from '../../../assets/StyleVariables';

type Props = {
  onPress: () => any,
  color?: string,
}

function NotesNavigationButton(props: Props) {
  const { onPress, color } = props;
  return (
    <ActionButton
      onPress={onPress}
      iconColor={color}
      labelColor={color}
      iconName="sticky-note"
      label="Notes"
    />
  );
}

NotesNavigationButton.defaultProps = {
  color: styleVariables.defaultNavigationTabContentColor,
};

export default NotesNavigationButton;
