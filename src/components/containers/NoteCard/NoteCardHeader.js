// @flow
import React from 'react';
import { View } from 'react-native';
import type { NoteInterface } from '../../../data-models/note/Note.interface';
import UserName from '../../fields/user-fields/UserName';
import NoteUpdatedAt from '../../fields/note-fields/NoteUpdatedAt';

type Props = {
  note: NoteInterface,
}

function NoteCardHeader(props: Props) {
  const {
    containerStyle,
    nameContainerStyle,
    lastUpdatedContainerStyle,
  } = styles;
  const { note } = props;
  return (
    <View style={containerStyle}>
      <View style={nameContainerStyle}>
        <UserName user={note.user}/>
      </View>
      <View style={lastUpdatedContainerStyle}>
        <NoteUpdatedAt note={note}/>
      </View>
    </View>
  );
}

NoteCardHeader.defaultProps = {};

const styles = {
  containerStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#32ff85',
    flexDirection: 'row',
  },
  nameContainerStyle: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lastUpdatedContainerStyle: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default NoteCardHeader;
