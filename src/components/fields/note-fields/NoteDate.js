// @flow
import React from 'react';
import { Text } from 'react-native';
import type { NoteInterface } from '../../../data-models/note/Note.interface';

type Props = {
  note: NoteInterface,
  style?: {},
}
function NoteDate(props: Props) {
  const { note, style } = props;
  return (
    <Text style={{ fontSize: 12, ...style }}>
      {note.date}
    </Text>
  );
}

NoteDate.defaultProps = {
  style: {},
};

export default NoteDate;
