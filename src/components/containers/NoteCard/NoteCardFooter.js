// @flow
import React from 'react';
import { View } from 'react-native';
import NoteCreatedAt from '../../fields/note-fields/NoteCreatedAt';
import NoteUpdatedAt from '../../fields/note-fields/NoteUpdatedAt';
import type { NoteInterface } from '../../../data-models/note/Note.interface';

type Props = {
  note: NoteInterface,
}

function NoteCardFooter(props: Props) {
  const { containerStyle } = styles;
  const { note } = props;
  return (
    <View style={containerStyle}>
      <NoteUpdatedAt note={note} withIcon/>
      <NoteCreatedAt note={note}/>
    </View>
  );
}

NoteCardFooter.defaultProps = {};

const styles = {
  containerStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#ff2beb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default NoteCardFooter;
