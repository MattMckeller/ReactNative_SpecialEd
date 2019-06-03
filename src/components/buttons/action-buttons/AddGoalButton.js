// @flow
import React from 'react';
import ActionButton from '../../shared/common/ActionButton';
import styleVariables from '../../../assets/StyleVariables';

type Props = {
  onPress: () => any,
}

function AddGoalButton(props: Props) {
  const { onPress } = props;
  const { addGoalActionButtonColor } = styleVariables;
  return (
    <ActionButton
      onPress={onPress}
      iconColor={addGoalActionButtonColor}
      iconName="bullseye"
      label="Add Goal"
    />
  );
}

AddGoalButton.defaultProps = {};

export default AddGoalButton;
