// @flow
import React from 'react';
import { Text, View } from 'react-native';
import type { NoteInterface } from '../../../data-models/note/Note.interface';
import HistoryIcon from '../icons/HistoryIcon';

type Props = {
  note: NoteInterface,
  withIcon?: boolean,
  style?: {},
}

function NoteUpdatedAt(props: Props) {
  const { note, style, withIcon } = props;
  return (
    <View style={{ flexDirection: 'row' }}>
      {withIcon && <HistoryIcon/>}
      <Text style={{ fontSize: 12, ...style }}>
        {note.updatedAt}
      </Text>
    </View>
  );
}

NoteUpdatedAt.defaultProps = {
  style: {},
  withIcon: false,
};

export default NoteUpdatedAt;
