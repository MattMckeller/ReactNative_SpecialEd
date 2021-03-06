// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Toast } from 'native-base';
import { NavigationScreenProps } from 'react-navigation';
import styleVariables from '../assets/StyleVariables';
import MainLayout from '../components/containers/layouts/MainLayout';
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
import CenteredWrapper from '../components/containers/layouts/wrappers/CenteredWrapper';
import ExportAllToPdfButton from '../components/buttons/action-buttons/ExportAllToPdfButton';
import AddStudentButton from '../components/buttons/action-buttons/AddStudentButton';
import { RouterHelpers } from '../navigation/router-helpers';
import { hideBottomCard, showBottomCard } from '../redux/actions/BottomSlidingCardActions';
import AddStudentScene from './AddStudentScene';

type Props = NavigationScreenProps & {
  configureMainFabAction: () => any,
  retrieveStudentsAction: () => any,
  selectedStudentFromListAction: (student: StudentInterface) => any,
  showBottomCardAction: (node: React.ReactNode) => any,
  hideBottomCardAction: (node: React.ReactNode) => any,
  didShowStudentListErrorToastAction: () => any,
  students: StudentInterface[],
  retrieveStudentsError: boolean,
  shouldOpenStudentListErrorToast: boolean,
  navigation: NavigationScreenProps
}

class StudentListScene extends Component<Props> {
  static navigationOptions = {
    title: 'Students',
  };

  constructor() {
    super();
    this.onSelectStudent = this.onSelectStudent.bind(this);
    this.showStudentListErrorToast = this.showStudentListErrorToast.bind(this);
    this.onAddStudent = this.onAddStudent.bind(this);
    this.onExportPdf = this.onExportPdf.bind(this);
  }

  componentDidMount(): void {
    const {
      configureMainFabAction,
      retrieveStudentsAction,
    } = this.props;

    console.log('cdm student list scene');

    configureMainFabAction({
      buttons: [
        this.getActionFabs(),
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
    const { students } = this.props;
    return (
      <MainLayout>
        <CenteredWrapper>
          <StudentList students={students} onSelectStudent={this.onSelectStudent}/>
        </CenteredWrapper>
      </MainLayout>
    );
  }

  getActionFabs(): React.Component[] {
    return [
      <AddStudentButton
        onPress={this.onAddStudent}
      />,
      <ExportAllToPdfButton
        onPress={this.onExportPdf}
      />,
    ];
  }

  onAddStudent() {
    console.log('pressed add student');
    const {
      showBottomCardAction,
      hideBottomCardAction,
    } = this.props;
    // todo
    showBottomCardAction(<AddStudentScene/>, function onCloseAddStudentCard() {
      console.log('closed card');
      hideBottomCardAction();
    });
  }

  onExportPdf() {
    console.log('pressed export to pdf');
  }

  onSelectStudent(student: StudentInterface) {
    const { selectedStudentFromListAction, navigation: { navigate } } = this.props;
    console.log('selected student', student);
    selectedStudentFromListAction(student);
    navigate(RouterHelpers.studentProfileNotes);
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

const mapStateToProps = (state) => {
  const {
    studentState: {
      students,
      shouldOpenStudentListErrorToast,
      retrieveStudentsError,
    },
  } = state;
  return {
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
  showBottomCardAction: showBottomCard,
  hideBottomCardAction: hideBottomCard,
})(StudentListScene);
