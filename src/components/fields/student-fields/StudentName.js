// @flow
import React from 'react';
import { Text } from 'react-native';
import type { StudentInterface } from '../../../data-models/student/Student.interface';

type Props = {
  student: StudentInterface,
  style?: object,
}
function StudentName(props: Props) {
  const { student, style } = props;
  const name = (student && (student.firstName.length || student.lastName.length))
    ? `${student.firstName.toLocaleUpperCase()} ${student.lastName.toLocaleUpperCase()}`.trim()
    : 'Unknown';
  return (
    <Text style={{ fontSize: 12, ...style }}>
      {name}
    </Text>
  );
}

StudentName.defaultProps = {
  style: {},
};

export default StudentName;
