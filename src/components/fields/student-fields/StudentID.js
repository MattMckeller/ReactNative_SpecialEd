// @flow
import React from 'react';
import { Text } from 'react-native';
import type { StudentInterface } from '../../../data-models/student/Student.interface';

type Props = {
  student: StudentInterface,
  style?: object,
}
function StudentID(props: Props) {
  const { student, style } = props;
  /* eslint-disable */
  return (
    <Text style={{ fontSize: 12, ...style }}>
      {`${student.studentId ? '#' + student.studentId : ''}`}
    </Text>
  );
}

StudentID.defaultProps = {
  style: {},
};

export default StudentID;
