// @flow
import React from 'react';
import { Text } from 'react-native';
import type { StudentInterface } from '../../../data-models/student/Student.interface';

type Props = {
  student: StudentInterface,
  style?: object,
}
function StudentDOB(props: Props) {
  const { student, style } = props;
  return (
    <Text style={{ fontSize: 12, ...style }}>
      {student.birthDate ? student.birthDate : ''}
    </Text>
  );
}

StudentDOB.defaultProps = {
  style: {},
};

export default StudentDOB;
