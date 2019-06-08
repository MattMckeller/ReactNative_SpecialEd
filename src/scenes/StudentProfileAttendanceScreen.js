// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import StudentProfileScenesController from './StudentProfileScenesController';
import type { AttendanceRecordInterface } from '../data-models/attendance-record/AttendanceRecord.interface';
import RecordAttendanceButton from '../components/buttons/action-buttons/RecordAttendanceButton';
import { configureMainFab } from '../redux/actions';

type Props = NavigationScreenProps & {
  configureMainFabAction: () => any,
  attendanceRecords: AttendanceRecordInterface[],
  retrieveNotesError: string, // todo handle errors
  retrieveStudentError: string,
}

class StudentProfileAttendanceScene extends Component<Props> {
  static navigationOptions = {
    title: 'Student Profile',
  };
  navigationSubscription: null;

  constructor() {
    console.log('student profile attendance scene construct');
    super();
    this.onRecordAttendance = this.onRecordAttendance.bind(this);
    this.configureFab = this.configureFab.bind(this);
  }

  componentDidMount(): void {
    const { navigation } = this.props;
    this.navigationSubscription = navigation.addListener(
      'didFocus',
      this.configureFab,
    );
  }

  componentWillUnmount(): void {
    this.navigationSubscription.remove();
  }

  render() {
    const { navigation } = this.props;
    return (
      <StudentProfileScenesController navigation={navigation}>
        <Text>Attendance Scene</Text>
      </StudentProfileScenesController>
    );
  }

  onRecordAttendance() {
    console.log('record attendance');
  }

  configureFab() {
    const {
      configureMainFabAction,
    } = this.props;

    configureMainFabAction({
      buttons: [
        StudentProfileAttendanceScene.getActionFabs(),
      ],
    });
  }

  static getActionFabs(): React.Component[] {
    return [
      <RecordAttendanceButton
        onPress={() => {
          console.log('pressed record attendance');
        }}
      />,
      ...StudentProfileScenesController.getActionFabs(),
    ];
  }
}


const mapStateToProps = (state) => {
  const {
    retrieveNotesError,
    selectedStudent: {
      attendanceRecords,
    },
  } = state.studentState;
  return {
    attendanceRecords,
    retrieveNotesError,
  };
};

export default connect(mapStateToProps, {
  configureMainFabAction: configureMainFab,
})(StudentProfileAttendanceScene);
