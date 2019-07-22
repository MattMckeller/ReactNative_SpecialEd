// @flow
import { View } from 'react-native';
import React from 'react';
import MultiTypeIcon from '../../../shared/icons/MultiTypeIcon';

type Props = {
  backgroundColor: string,
  height?: number,
  handlers: any, // pan handlers
}

function SlidingCardDraggableTop({
  backgroundColor,
  height,
  handlers,
}: Props) {
  return (
    <View
      style={{
        width: '100%',
        height,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
      }}
      {...handlers}
    >
      <MultiTypeIcon name="angle-down"/>
    </View>
  );
}

SlidingCardDraggableTop.defaultProps = {
  height: 35,
};

export default SlidingCardDraggableTop;
