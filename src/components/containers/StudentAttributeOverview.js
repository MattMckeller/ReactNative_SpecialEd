// @flow
import React from 'react';
import { Text, View } from 'react-native';
import type { StudentInterface } from '../../data-models/student/Student.interface';
import StudentProfileIcon from '../shared/icons/StudentProfileIcon';
import StudentName from '../fields/student-fields/StudentName';
import StudentID from '../fields/student-fields/StudentID';
import StudentDOB from '../fields/student-fields/StudentDOB';
import StudentGender from '../fields/student-fields/StudentGender';
import StudentSchool from '../fields/student-fields/StudentSchool';

type Props = {
  student: StudentInterface;
}
function StudentAttributeOverview(props: Props) {
  const { student } = props;
  const {
    rootContainerStyle,
    leftContainerStyle,
    rightContainerStyle,
    attributeContainerStyle,
    nameStyle,
    labelStyle,
    valueStyle,
  } = styles;
  return (
    <View style={rootContainerStyle}>
      <View style={leftContainerStyle}>
        <StudentProfileIcon />
      </View>
      <View style={rightContainerStyle}>
        <View style={attributeContainerStyle}>
          <StudentName student={student} style={nameStyle} />
        </View>
        <View style={attributeContainerStyle}>
          <Text style={labelStyle}>ID: </Text>
          <StudentID student={student} style={valueStyle} />
        </View>
        <View style={attributeContainerStyle}>
          <Text style={labelStyle}>DOB: </Text>
          <StudentDOB student={student} style={valueStyle} />
        </View>
        <View style={attributeContainerStyle}>
          <Text style={labelStyle}>Gender: </Text>
          <StudentGender student={student} style={valueStyle} />
        </View>
        <View style={attributeContainerStyle}>
          <Text style={labelStyle}>School: </Text>
          <StudentSchool student={student} style={valueStyle} />
        </View>
      </View>
    </View>
  );
}

StudentAttributeOverview.defaultProps = {};

const styles = {
  rootContainerStyle: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
  },
  leftContainerStyle: {
    flex: 1,
    height: '100%',
    backgroundColor: 'blue',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainerStyle: {
    flex: 2,
    height: '100%',
    backgroundColor: 'green',
  },
  nameStyle: {

  },
  attributeContainerStyle: {
    flexDirection: 'row',
  },
  labelStyle: {
    fontWeight: 'bold',
  },
  valueStyle: {

  },
};

export default StudentAttributeOverview;
