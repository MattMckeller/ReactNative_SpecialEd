// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';
import StudentNotesList from '../components/containers/StudentNoteList';
import type { NoteInterface } from '../data-models/note/Note.interface';
import StudentProfileScenesController from './StudentProfileScenesController';
import { configureMainFab } from '../redux/actions';
import AddNoteButton from '../components/buttons/action-buttons/AddNoteButton';

type Props = NavigationScreenProps & {
  configureMainFabAction: () => any,
  notes: NoteInterface[],
  retrieveNotesError: string, // todo handle errors
  retrieveStudentError: string,
}

class StudentProfileNotesScene extends Component<Props> {
  static navigationOptions = {
    title: 'Student Profile',
  };
  navigationSubscription: null;

  constructor() {
    super();
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onEditNote = this.onEditNote.bind(this);
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
    const { notes } = this.props;
    return (
      <StudentProfileScenesController>
        <StudentNotesList
          notes={notes}
          onDeleteNotePress={this.onDeleteNote}
          onEditNotePress={this.onEditNote}
        />
      </StudentProfileScenesController>
    );
  }

  onAddNote() {
    console.log('add note');
  }

  onEditNote(note: NoteInterface) {
    console.log('edit note', note);
  }

  onDeleteNote(note: NoteInterface) {
    console.log('delete note', note);
  }

  static getActionFabs(): React.Component[] {
    return [
      <AddNoteButton
        onPress={() => {
          console.log('pressed add note');
        }}
      />,
      ...StudentProfileScenesController.getActionFabs(),
    ];
  }

  configureFab() {
    const {
      configureMainFabAction,
    } = this.props;

    configureMainFabAction({
      buttons: [
        StudentProfileNotesScene.getActionFabs(),
      ],
    });
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

export default connect(mapStateToProps, {
  configureMainFabAction: configureMainFab,
})(StudentProfileNotesScene);
