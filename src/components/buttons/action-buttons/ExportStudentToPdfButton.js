// @flow
import React from 'react';
import ActionButton from '../../shared/common/ActionButton';
import styleVariables from '../../../assets/StyleVariables';

type Props = {
  onPress: () => any,
}
function ExportStudentToPdfButton(props: Props) {
  const { onPress } = props;
  const { exportStudentToPdfActionButtonColor } = styleVariables;
  return (
    <ActionButton
      onPress={onPress}
      iconColor={exportStudentToPdfActionButtonColor}
      iconName="file-export"
      label="Export Student to PDF"
    />
  );
}

ExportStudentToPdfButton.defaultProps = {};

export default ExportStudentToPdfButton;
