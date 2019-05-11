// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import type { StudentInterface } from '../../../data-models/student/Student.interface';

type Props = {
  student: StudentInterface,
  style?: object,
}
function StudentName(props: Props) {
  const { student, style } = props;
  console.log('style', style);
  return (
    <Text style={{ fontSize: 12, ...style }}>
      {`${student.firstName.toLocaleUpperCase()} ${student.lastName.toLocaleUpperCase()}`}
    </Text>
  );
}

StudentName.defaultProps = {
  style: {},
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(StudentName);
