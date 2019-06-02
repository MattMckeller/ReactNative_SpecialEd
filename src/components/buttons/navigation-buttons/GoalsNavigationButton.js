// @flow
import React from 'react';
import ActionButton from '../../shared/common/ActionButton';
import styleVariables from '../../../assets/StyleVariables';

type Props = {
  onPress: () => any,
  color?: string,
}

function GoalsNavigationButton(props: Props) {
  const { onPress, color } = props;
  return (
    <ActionButton
      onPress={onPress}
      iconColor={color}
      labelColor={color}
      iconName="bullseye"
      label="Goals"
    />
  );
}

GoalsNavigationButton.defaultProps = {
  color: styleVariables.defaultNavigationTabContentColor,
};

export default GoalsNavigationButton;
