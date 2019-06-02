// @flow
import React from 'react';
import ActionButton from '../../shared/common/ActionButton';
import styleVariables from '../../../assets/StyleVariables';

type Props = {
  onPress: () => any,
  color?: string,
}

function AttendanceNavigationButton(props: Props) {
  const { onPress, color } = props;
  return (
    <ActionButton
      onPress={onPress}
      iconColor={color}
      labelColor={color}
      iconName="calendar-alt"
      label="Attendance"
    />
  );
}

AttendanceNavigationButton.defaultProps = {
  color: styleVariables.defaultNavigationTabContentColor,
};

export default AttendanceNavigationButton;
