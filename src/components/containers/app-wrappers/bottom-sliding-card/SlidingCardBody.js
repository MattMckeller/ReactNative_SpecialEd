// @flow
import { View } from 'react-native';
import React from 'react';

type Props = {
  backgroundColor: string,
  children: React.ReactNode,
}

function SlidingCardBody({ backgroundColor, children }: Props) {
  return (
    <View style={{ width: '100%', height: '100%', backgroundColor }}>
      {children}
    </View>
  );
}

SlidingCardBody.defaultProps = {};

export default SlidingCardBody;
