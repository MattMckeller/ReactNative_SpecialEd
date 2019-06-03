// @flow
import React from 'react';
import ActionButton from '../../shared/common/ActionButton';
import styleVariables from '../../../assets/StyleVariables';

type Props = {
  onPress: () => any,
}

function RecordAttendanceButton(props: Props) {
  const { onPress } = props;
  const { recordAttendanceActionButtonColor } = styleVariables;
  return (
    <ActionButton
      onPress={onPress}
      iconColor={recordAttendanceActionButtonColor}
      iconName="calendar-plus"
      label="Record Attendance"
    />
  );
}

RecordAttendanceButton.defaultProps = {};

export default RecordAttendanceButton;
