// @flow
import React from 'react';
import { Text } from 'react-native';
import type { StudentInterface } from '../../../data-models/student/Student.interface';

type Props = {
  student: StudentInterface,
  style?: object,
}
function StudentSchool(props: Props) {
  const { student, style } = props;
  return (
    <Text style={{ fontSize: 12, ...style }}>
      {(student && student.school && student.school.name ? student.school.name : '')}
    </Text>
  );
}

StudentSchool.defaultProps = {
  style: {},
};

export default StudentSchool;
