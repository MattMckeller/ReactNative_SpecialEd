// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import type { StudentInterface } from '../../../data-models/student/Student.interface';

type Props = {
  student: StudentInterface,
  style?: object,
}
function StudentLastUpdatedAt(props: Props) {
  const { student, style } = props;
  return (
    <Text style={{ fontSize: 12, ...style }}>
      {student.updatedAt}
    </Text>
  );
}
StudentLastUpdatedAt.defaultProps = {
  style: {},
};


const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(StudentLastUpdatedAt);
