// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';
import StudentNotesList from '../components/containers/StudentNoteList';
import type { NoteInterface } from '../data-models/note/Note.interface';
import StudentProfileScenesController from './StudentProfileScenesController';

type Props = NavigationScreenProps & {
  notes: NoteInterface[],
  retrieveNotesError: string, // todo handle errors
  retrieveStudentError: string,
}

class StudentProfileNotesScene extends Component<Props> {
  constructor() {
    super();
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onEditNote = this.onEditNote.bind(this);
  }

  render() {
    const { notes, navigation } = this.props;
    return (
      <StudentProfileScenesController navigation={navigation}>
        <StudentNotesList
          notes={notes}
          onDeleteNotePress={this.onDeleteNote}
          onEditNotePress={this.onEditNote}
        />
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
    selectedStudent: {
      notes,
    },
  } = state.studentState;
  return {
    notes,
    retrieveNotesError,
  };
};

export default connect(mapStateToProps, {})(StudentProfileNotesScene);
