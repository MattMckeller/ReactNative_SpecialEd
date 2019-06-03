// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { NavigationRoute, NavigationScreenProp } from 'react-navigation';
import type { StudentInterface } from '../data-models/student/Student.interface';
import MainLayout from '../components/containers/layouts/MainLayout';
import StudentAttributeOverview from '../components/containers/StudentAttributeOverview';
import { retrieveStudentDetails } from '../redux/actions';
import StudentProfileFooter from '../components/containers/layouts/footers/StudentProfileFooter';
import DeleteStudentButton from '../components/buttons/action-buttons/DeleteStudentButton';
import ExportStudentToPdfButton
  from '../components/buttons/action-buttons/ExportStudentToPdfButton';

type Props = {
  navigation: NavigationScreenProp<NavigationRoute<Params>, Params>,
  selectedStudent: StudentInterface,
  lastFetchedStudentId: number,
  retrieveStudentError: string, // todo handle errors
  retrieveStudentDetailsAction: (student: StudentInterface) => any,
  loading: boolean,
  children: any,
}

class StudentProfileScenesController extends Component<Props> {
  constructor() {
    super();
    this.onStudentExport = this.onStudentExport.bind(this);
    this.onDeleteStudent = this.onDeleteStudent.bind(this);
  }

  componentDidMount(): void {
    const {
      retrieveStudentDetailsAction,
      selectedStudent,
      lastFetchedStudentId,
    } = this.props;
    // Only fetch data if it has not already been fetched
    if (!lastFetchedStudentId || lastFetchedStudentId !== selectedStudent.id) {
      retrieveStudentDetailsAction(selectedStudent);
    }
  }

  render() {
    const {
      selectedStudent, loading, children, navigation,
    } = this.props;
    const {
      layoutContainerStyle,
      bodyContainerStyle,
      studentAttributeContainerStyle,
    } = styles;
    return (
      <MainLayout
        loading={loading}
        contentContainerStyle={layoutContainerStyle}
        footer={<StudentProfileFooter navigation={navigation}/>}
      >
        <View style={studentAttributeContainerStyle}>
          <StudentAttributeOverview student={selectedStudent}/>
        </View>
        <View style={bodyContainerStyle}>
          {children}
        </View>
      </MainLayout>
    );
  }

  onStudentExport() {
    console.log('export student');
  }

  onDeleteStudent() {
    console.log('delete student');
  }

  static getActionFabs(): React.Component[] {
    return [
      <DeleteStudentButton
        onPress={() => {
          console.log('pressed delete student');
        }}
      />,
      <ExportStudentToPdfButton
        onPress={() => {
          console.log('pressed export student to pdf');
        }}
      />,
    ];
  }
}

const styles = {
  layoutContainerStyle: {
    flex: 1,
  },
  studentAttributeContainerStyle: {
    height: 150,
    width: '100%',
  },
  bodyContainerStyle: {
    height: 500,
    minHeight: 500,
    width: '100%',
    backgroundColor: 'maroon',
  },
};

const mapStateToProps = (state) => {
  const {
    studentState: {
      selectedStudent,
      lastFetchedStudentId,
      retrieveStudentError,
    },
    loadingState: { loading },
  } = state;
  return {
    loading,
    selectedStudent,
    lastFetchedStudentId,
    retrieveStudentError,
  };
};

export default connect(mapStateToProps, {
  retrieveStudentDetailsAction: retrieveStudentDetails,
})(StudentProfileScenesController);
