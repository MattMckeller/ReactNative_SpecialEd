// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Toast } from 'native-base';
import globalStyles from '../assets/styles/GlobalStyles';
import styleVariables from '../assets/StyleVariables';
import MainLayout from '../layouts/MainLayout';
import StudentList from '../components/containers/StudentList';
import { configureMainFab } from '../redux/actions';
import FabOption from '../components/shared/common/FabOption';
import type { StudentInterface } from '../data-models/student/Student.interface';
import { didShowStudentListErrorToast, retrieveStudents } from '../redux/actions/StudentActions';
import CenteredWrapper from "../components/containers/CenteredWrapper";

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
        <CenteredWrapper>
          <StudentList students={students} />
        </CenteredWrapper>
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

const styles = {};

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
