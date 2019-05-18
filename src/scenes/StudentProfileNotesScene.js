// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import CenteredWrapper from '../components/containers/CenteredWrapper';
import type { StudentInterface } from '../data-models/student/Student.interface';
import MainLayout from '../layouts/MainLayout';

type Props = {
  selectedStudent: StudentInterface,
  loading: boolean,
  shouldOpenErrorToast: boolean,
  retrieveNotesError: string,
  retrieveStudentError: string,
}
class StudentProfileNotesScene extends Component<Props> {
  constructor() {
    console.log('student profile notes scene construct');
    super();
  }

  render() {
    const { selectedStudent, loading } = this.props;
    return (
      <MainLayout loading={loading}>
        <CenteredWrapper>
          <Text>adf</Text>
        </CenteredWrapper>
      </MainLayout>
    );
  }
}

const styles = {};

const mapStateToProps = (state) => {
  const { studentState } = state;
  return {
    selectedStudent: studentState.selectedStudent,
    loading: studentState.retrieveNotesProcessing || studentState.retrieveStudentProcessing,
    shouldOpenErrorToast: studentState.shouldOpenStudentProfileNotesErrorToast,
    retrieveNotesError: studentState.retrieveNotesError,
    retrieveStudentError: studentState.retrieveStudentError,
  };
};

export default connect(mapStateToProps, {
})(StudentProfileNotesScene);
