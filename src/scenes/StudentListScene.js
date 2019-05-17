// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';
import styleVariables from '../assets/StyleVariables';
import MainLayout from '../layouts/MainLayout';
import StudentList from '../components/containers/StudentList';
import { configureMainFab } from '../redux/actions';
import FabOption from '../components/shared/common/FabOption';
import type { StudentInterface } from '../data-models/student/Student.interface';
import {didShowStudentListErrorToast, retrieveStudents} from "../redux/actions/StudentActions";
import {Toast} from "native-base";

type Props = {
  configureMainFabAction: () => any,
  retrieveStudentsAction: () => any,
  didShowStudentListErrorToastAction: () => any,
  students: StudentInterface[],
  loading: boolean,
  retrieveStudentsError: boolean,
  shouldOpenStudentListErrorToast: boolean,
}
class StudentListScene extends Component<Props> {
  componentDidMount(): void {
    const {
      configureMainFabAction,
      retrieveStudentsAction,
    } = this.props;

    configureMainFabAction({
      buttons: [
        StudentListScene.getActionFabs(),
      ],
    });

    retrieveStudentsAction();
  }

  componentDidUpdate(): void {
    const { shouldOpenStudentListErrorToast } = this.props;
    if (shouldOpenStudentListErrorToast === true) {
      this.showStudentListErrorToast();
    }
  }

  render() {
    const { flexColumn } = globalStyles;
    const { containerStyle } = styles;
    const { students, loading } = this.props;
    // todo move background here
    return (
      <MainLayout loading={loading}>
        {/* todo maybe combine these multiple views into a single component */}
        <View style={{ ...containerStyle, ...flexColumn, ...{ backgroundColor: 'blue' } }}>
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
              width: '95%', height: '100%', justifyContent: 'center', backgroundColor: 'brown',
            }}
            >
              <StudentList students={students} />
            </View>
          </View>
        </View>
      </MainLayout>
    );
  }

  static getActionFabs(): React.Component[] {
    return [
      <FabOption
        label="Add Student"
        onPress={() => {
          console.log('pressed add student');
        }}
        iconName="user-plus"
      />,
      <FabOption
        label="Export all to PDF"
        onPress={() => {
          console.log('pressed export to pdf');
        }}
        iconName="file-export"
      />,
    ];
  }

  showStudentListErrorToast() {
    const { retrieveStudentsError, didShowStudentListErrorToastAction } = this.props;
    Toast.show({
      text: retrieveStudentsError,
      buttonText: 'Okay',
      duration: 10000,
      type: 'danger',
      style: {
        backgroundColor: styleVariables.errorColor,
      },
    });
    didShowStudentListErrorToastAction();
  }
}

const styles = {
  containerStyle: {
    backgroundColor: styleVariables.primaryColor,
    height: '100%',
  },
};

const mapStateToProps = (state) => {
  const { studentState } = state;
  return {
    students: studentState.students,
    loading: studentState.retrieveStudentsProcessing,
    shouldOpenStudentListErrorToast: studentState.shouldOpenStudentListErrorToast,
    retrieveStudentsError: studentState.retrieveStudentsError,
  };
};

export default connect(mapStateToProps, {
  configureMainFabAction: configureMainFab,
  retrieveStudentsAction: retrieveStudents,
  didShowStudentListErrorToastAction: didShowStudentListErrorToast,
})(StudentListScene);
