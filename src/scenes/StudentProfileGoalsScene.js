// @flow
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import type { StudentInterface } from '../data-models/student/Student.interface';
import StudentNotesList from '../components/containers/StudentNoteList';
import type { NoteInterface } from '../data-models/note/Note.interface';
import StudentProfileScenesController from './StudentProfileScenesController';
import { NavigationScreenProps } from "react-navigation";

type Props = NavigationScreenProps & {
  selectedStudent: StudentInterface,
  retrieveNotesError: string, // todo handle errors
  retrieveStudentError: string,
}

class StudentProfileGoalsScene extends Component<Props> {
  constructor() {
    console.log('student profile goals scene construct');
    super();
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onEditNote = this.onEditNote.bind(this);
  }

  render() {
    const { selectedStudent, navigation } = this.props;
    return (
      <StudentProfileScenesController navigation={navigation}>
        <Text>goals scene</Text>
      </StudentProfileScenesController>
    );
  }

  onEditNote(note: NoteInterface) {
    console.log('edit note', note);
  }

  onDeleteNote(note: NoteInterface) {
    console.log('delete note', note);
  }
}


const mapStateToProps = (state) => {
  const {
    retrieveNotesError,
    selectedStudent,
  } = state.studentState;
  return {
    selectedStudent,
    retrieveNotesError,
  };
};

export default connect(mapStateToProps, {})(StudentProfileGoalsScene);
