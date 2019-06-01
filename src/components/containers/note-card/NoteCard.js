// @flow
import React from 'react';
import { View } from 'react-native';
import type { NoteInterface } from '../../../data-models/note/Note.interface';
import ExpandableCard from '../../shared/common/ExpandableCard';
import NoteCardHeader from './NoteCardHeader';
import NoteCardFooter from './NoteCardFooter';
import EditNoteButton from '../../buttons/ActionButtons/EditNoteButton';
import DeleteNoteButton from '../../buttons/ActionButtons/DeleteNoteButton';

type Props = {
  note: NoteInterface;
  onEditNotePress: (note: NoteInterface) => any,
  onDeleteNotePress: (note: NoteInterface) => any,
};

function NoteCard(props: Props) {
  const {
    note,
    onEditNotePress,
    onDeleteNotePress,
  } = props;

  const {
    noteCardContainerStyle,
  } = styles;

  return (
    <View style={noteCardContainerStyle}>
      <ExpandableCard
        bodyText={note.text}
        header={<NoteCardHeader note={note}/>}
        footer={<NoteCardFooter note={note}/>}
        actionButtons={[
          <DeleteNoteButton onPress={onDeleteNotePress} key="delete-note-button"/>,
          <EditNoteButton onPress={onEditNotePress} key="edit-note-button"/>,
        ]}
      />
    </View>
  );
}

const styles = {
  noteCardContainerStyle: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#31fcff',
    borderWidth: 1,
    borderColor: 'black',
  },
};

export default NoteCard;
