// @flow
import React from 'react';
import { Text } from 'react-native';
import type { StudentInterface } from '../../../data-models/student/Student.interface';

type Props = {
  student: StudentInterface,
  style?: object,
}
function StudentGender(props: Props) {
  const { student, style } = props;
  return (
    <Text style={{ fontSize: 12, ...style }}>
      {student.gender ? student.gender : ''}
    </Text>
  );
}

StudentGender.defaultProps = {
  style: {},
};

export default StudentGender;
