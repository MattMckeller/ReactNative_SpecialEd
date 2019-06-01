// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toast } from 'native-base';
import styleVariables from '../assets/StyleVariables';
import MainLayout from '../layouts/MainLayout';
import StudentList from '../components/containers/StudentList';
import {
  configureMainFab,
  didShowStudentListErrorToast,
  selectedStudentFromList,
} from '../redux/actions';
import type { StudentInterface } from '../data-models/student/Student.interface';
import {
  retrieveStudents,
} from '../redux/actions/StudentActions';
import CenteredWrapper from '../components/containers/CenteredWrapper';
import ExportAllToPdfButton from '../components/buttons/ExportAllToPdfButton';
import AddStudentButton from '../components/buttons/AddStudentButton';

type Props = {
  configureMainFabAction: () => any,
  retrieveStudentsAction: () => any,
  selectedStudentFromListAction: (student: StudentInterface) => any,
  didShowStudentListErrorToastAction: () => any,
  students: StudentInterface[],
  loading: boolean,
  retrieveStudentsError: boolean,
  shouldOpenStudentListErrorToast: boolean,
}

class StudentListScene extends Component<Props> {

  constructor() {
    super();
    this.onSelectStudent = this.onSelectStudent.bind(this);
    this.showStudentListErrorToast = this.showStudentListErrorToast.bind(this);
  }

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
    const { students, loading } = this.props;
    // todo move background here
    return (
      <MainLayout loading={loading}>
        <CenteredWrapper>
          <StudentList students={students} onSelectStudent={this.onSelectStudent}/>
        </CenteredWrapper>
      </MainLayout>
    );
  }

  static getActionFabs(): React.Component[] {
    return [
      <AddStudentButton
        onPress={() => {
          console.log('pressed add student');
        }}
      />,
      <ExportAllToPdfButton
        onPress={() => {
          console.log('pressed export to pdf');
        }}
      />,
    ];
  }

  onSelectStudent(student: StudentInterface) {
    const { selectedStudentFromListAction } = this.props;
    console.log('selected student', student);
    selectedStudentFromListAction(student);
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
  const {
    studentState: {
      students,
      shouldOpenStudentListErrorToast,
      retrieveStudentsError,
    },
    loadingState: {
      loading,
    },
  } = state;
  return {
    loading,
    students,
    shouldOpenStudentListErrorToast,
    retrieveStudentsError,
  };
};

export default connect(mapStateToProps, {
  configureMainFabAction: configureMainFab,
  retrieveStudentsAction: retrieveStudents,
  didShowStudentListErrorToastAction: didShowStudentListErrorToast,
  selectedStudentFromListAction: selectedStudentFromList,
})(StudentListScene);
