// @flow
import React from 'react';
import { FlatList, View } from 'react-native';
import type { NoteInterface } from '../../data-models/note/Note.interface';
import NoteCard from './NoteCard/NoteCard';

type Props = {
  notes: NoteInterface[];
  onEditNotePress: (note: NoteInterface) => any;
  onDeleteNotePress: (note: NoteInterface) => any;
}
const StudentNotesList = (props: Props) => {
  const {
    notes,
    onEditNotePress,
    onDeleteNotePress,
  } = props;

  // eslint-disable-next-line
  const renderRow = ({ item, index }) => {
    const { cardContainer } = styles;
    return (
      <View style={cardContainer}>
        <NoteCard
          note={item}
          onEditNotePress={onEditNotePress}
          onDeleteNotePress={onDeleteNotePress}
        />
      </View>
    );
  };

  // eslint-disable-next-line
  const keyExtractor = (item: NoteInterface, index: number) => (item.id && item.id.toString().length ? item.id.toString() : index.toString());

  return (notes && notes.length > 0)
    ? (
      <FlatList
        data={notes}
        renderItem={renderRow}
        keyExtractor={keyExtractor}
        style={{ backgroundColor: 'pink', width: '100%' }}
      />
    ) : null;
};

const styles = {
  cardContainer: {
    marginBottom: 10,
    width: '100%',
  },
};

export default StudentNotesList;
