// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Icon } from 'native-base';
import type { StudentInterface } from '../../data-models/student/Student.interface';
import globalStyles from "../../assets/styles/GlobalStyles";
import styleVariables from "../../assets/StyleVariables";
import StudentLastUpdatedAt from "../shared/StudentFields/StudentLastUpdatedAt";
import StudentID from "../shared/StudentFields/StudentID";
import StudentName from "../shared/StudentFields/StudentName";

type Props = {
  student: StudentInterface;
};
class StudentCard extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    const { student } = this.props;
    console.log('student card', student);

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
        <View style={arrowContainerStyle}>
          <Icon
            style={arrowIconStyle}
            name="angle-right"
            type="FontAwesome5"
          />
        </View>
      </View>
    );
  }
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
  },
  arrowIconStyle: {
    fontSize: 20,
    width: 20,
    color: styleVariables.actionArrowStyleColor,
  },
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(StudentCard);
