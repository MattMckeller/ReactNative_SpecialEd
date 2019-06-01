// @flow
import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { Icon } from 'native-base';
import type { StudentInterface } from '../../data-models/student/Student.interface';
import globalStyles from '../../assets/styles/GlobalStyles';
import styleVariables from '../../assets/StyleVariables';
import StudentLastUpdatedAt from '../fields/student-fields/StudentLastUpdatedAt';
import StudentID from '../fields/student-fields/StudentID';
import StudentName from '../fields/student-fields/StudentName';

type Props = {
  student: StudentInterface;
  onPress: (student: StudentInterface) => any,
};
function StudentCard(props: Props) {
  const { student, onPress } = props;

  const {
    cardContainerStyle,
    topContainerStyle,
    bottomContainerStyle,
    detailContainer,
    studentIDContainerStyle,
    lastUpdatedAtStyle,
    arrowContainerStyle,
    arrowIconStyle,
  } = styles;

  const { lightDescriptionText } = globalStyles;

  const _onPress = () => {
    onPress(student);
  };

  return (
    <View style={cardContainerStyle}>
      <View style={topContainerStyle}>
        <StudentName student={student} />
      </View>
      <View style={bottomContainerStyle}>
        <View style={detailContainer}>
          <View style={studentIDContainerStyle}>
            <StudentID style={lightDescriptionText} student={student} />
          </View>
          <View style={lastUpdatedAtStyle}>
            <StudentLastUpdatedAt style={lightDescriptionText} student={student} />
          </View>
        </View>
      </View>
      <TouchableHighlight onPress={_onPress} style={arrowContainerStyle}>
        <Icon
          style={arrowIconStyle}
          name="angle-right"
          type="FontAwesome5"
        />
      </TouchableHighlight>
    </View>
  );
}

const styles = {
  cardContainerStyle: {
    width: '100%',
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 20,
    paddingRight: 40,
  },
  topContainerStyle: {
    width: '100%',
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  bottomContainerStyle: {
    width: '100%',
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  detailContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowContainerStyle: {
    position: 'absolute',
    right: 20,
    width: 100,
    height: '100%',
    backgroundColor: '#f9ee73',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIconStyle: {
    fontSize: 20,
    width: 20,
    color: styleVariables.actionArrowStyleColor,
  },
};

export default StudentCard;
