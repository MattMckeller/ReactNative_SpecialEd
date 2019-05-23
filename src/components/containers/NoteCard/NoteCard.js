// @flow
import React from 'react';
import { View } from 'react-native';
import globalStyles from '../../../assets/styles/GlobalStyles';
import styleVariables from '../../../assets/StyleVariables';
import type { NoteInterface } from '../../../data-models/note/Note.interface';
import ExpandableCard from '../../shared/common/ExpandableCard';

type Props = {
  note: NoteInterface;
  noteIndex: number,
  onEditNotePress: (note: NoteInterface) => any,
  onDeleteNotePress: (note: NoteInterface) => any,
};
function NoteCard(props: Props) {
  // todo, all
  const {
    note,
    noteIndex,
    onEditNotePress,
    onDeleteNotePress,
  } = props;

  const {
    cardContainerStyle,
    topContainerStyle,
    bottomContainerStyle,
    detailContainer,
    studentIDContainerStyle,
    lastUpdatedAtStyle,
    arrowContainerStyle,
    arrowIconStyle,
  } = styles;

  const { lightDescriptionText } = globalStyles;

  return (
    <View style={cardContainerStyle}>
      <ExpandableCard
        bodyText={note.text}
      />
    </View>
  );
}

const styles = {
  cardContainerStyle: {
    width: '100%',
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 20,
    paddingRight: 40,
  },
  topContainerStyle: {
    width: '100%',
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  bottomContainerStyle: {
    width: '100%',
    height: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  detailContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowContainerStyle: {
    position: 'absolute',
    right: 20,
    width: 100,
    height: '100%',
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIconStyle: {
    fontSize: 20,
    width: 20,
    color: styleVariables.actionArrowStyleColor,
  },
};

export default NoteCard;
