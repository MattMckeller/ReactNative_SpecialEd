// @flow
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProps } from 'react-navigation';
import type { NoteInterface } from '../data-models/note/Note.interface';
import StudentProfileScenesController from './StudentProfileScenesController';
import { configureMainFab } from '../redux/actions';
import type { GoalInterface } from '../data-models/goal/Goal.interface';
import AddGoalButton from '../components/buttons/action-buttons/AddGoalButton';

type Props = NavigationScreenProps & {
  configureMainFabAction: () => any,
  goals: GoalInterface[],
  retrieveNotesError: string, // todo handle errors
  retrieveStudentError: string,
}

class StudentProfileGoalsScene extends Component<Props> {
  static navigationOptions = {
    title: 'Student Profile',
  };
  navigationSubscription: null;

  constructor() {
    super();
    this.onAddGoal = this.onAddGoal.bind(this);
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
    return (
      <StudentProfileScenesController>
        <Text>goals scene</Text>
      </StudentProfileScenesController>
    );
  }

  onAddGoal() {
    console.log('add goal');
  }

  onEditNote(note: NoteInterface) {
    console.log('edit note', note);
  }

  onDeleteNote(note: NoteInterface) {
    console.log('delete note', note);
  }

  configureFab() {
    const {
      configureMainFabAction,
    } = this.props;

    configureMainFabAction({
      buttons: [
        StudentProfileGoalsScene.getActionFabs(),
      ],
    });
  }

  static getActionFabs(): React.Component[] {
    return [
      <AddGoalButton
        onPress={() => {
          console.log('pressed add goal');
        }}
      />,
      ...StudentProfileScenesController.getActionFabs(),
    ];
  }
}


const mapStateToProps = (state) => {
  const {
    retrieveNotesError,
    selectedStudent: {
      goals,
    },
  } = state.studentState;
  return {
    goals,
    retrieveNotesError,
  };
};

export default connect(mapStateToProps, {
  configureMainFabAction: configureMainFab,
})(StudentProfileGoalsScene);
