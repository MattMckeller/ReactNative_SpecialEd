// @flow
import React from 'react';
import { Text } from 'react-native';
import type { NoteInterface } from '../../../data-models/note/Note.interface';

type Props = {
  note: NoteInterface,
  style?: {},
}
function NoteMinutes(props: Props) {
  const { note, style } = props;
  return (
    <Text style={{ fontSize: 12, ...style }}>
      {note.minutes}
    </Text>
  );
}

NoteMinutes.defaultProps = {
  style: {},
};

export default NoteMinutes;
