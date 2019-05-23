// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import type { StudentInterface } from '../data-models/student/Student.interface';
import MainLayout from '../layouts/MainLayout';
import StudentAttributeOverview from '../components/containers/StudentAttributeOverview';
import StudentNotesList from '../components/containers/StudentNoteList';
import type { NoteInterface } from '../data-models/note/Note.interface';
import { retrieveStudentDetails } from '../redux/actions';

type Props = {
  selectedStudent: StudentInterface,
  loading: boolean,
  shouldOpenErrorToast: boolean,
  retrieveNotesError: string,
  retrieveStudentError: string,
  retrieveStudentDetailsAction: (student: StudentInterface) => any,
}

class StudentProfileNotesScene extends Component<Props> {
  constructor() {
    console.log('student profile notes scene construct', { ...styles });
    super();
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onEditNote = this.onEditNote.bind(this);
  }

  componentDidMount(): void {
    const {
      retrieveStudentDetailsAction,
      selectedStudent,
    } = this.props;
    retrieveStudentDetailsAction(selectedStudent);
  }

  render() {
    console.log('selected student from render', this.selectedStudent);
    const { selectedStudent, loading } = this.props;
    const {
      studentAttributeContainerStyle,
      studentListContainerStyle,
      layoutContainerStyle,
    } = styles;
    console.log({
      ...studentListContainerStyle,
      ...layoutContainerStyle,
      ...studentAttributeContainerStyle,
      ...styles,
    });
    console.log({
      studentListContainerStyle: { ...studentListContainerStyle },
      layoutContainerStyle: { ...layoutContainerStyle },
      studentAttributeContainerStyle: { ...studentAttributeContainerStyle },
      styles: { ...styles },
    });
    return (
      <MainLayout loading={loading} contentContainerStyle={layoutContainerStyle}>
        <View style={studentAttributeContainerStyle}>
          <StudentAttributeOverview student={selectedStudent}/>
        </View>
        <View style={{
          // flex: 1,
          height: 500,
          minHeight: 500,
          width: '100%',
          backgroundColor: 'maroon',
        }}>
          <StudentNotesList
            notes={selectedStudent.notes}
            onDeleteNotePress={this.onDeleteNote}
            onEditNotePress={this.onEditNote}
          />
        </View>
      </MainLayout>
    );
  }

  onEditNote(note: NoteInterface) {
    console.log('edit note', note);
  }

  onDeleteNote(note: NoteInterface) {
    console.log('delete note', note);
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
  studentListContainerStyle: {
    // flex: 1,
    height: 500,
    minHeight: 500,
    width: '100%',
    backgroundColor: 'maroon',
  },
};

const mapStateToProps = (state) => {
  const {
    studentState: {
      shouldOpenStudentProfileNotesErrorToast,
      retrieveNotesError,
      retrieveStudentError,
      selectedStudent,
    },
    loadingState: { loading },
  } = state;
  return {
    loading,
    selectedStudent,
    retrieveNotesError,
    retrieveStudentError,
    shouldOpenErrorToast: shouldOpenStudentProfileNotesErrorToast,
  };
};

export default connect(mapStateToProps, {
  retrieveStudentDetailsAction: retrieveStudentDetails,
})(StudentProfileNotesScene);
