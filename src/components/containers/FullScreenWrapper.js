// @flow
import React from 'react';
import { Dimensions, View } from 'react-native';

const { height, width } = Dimensions.get('window');

type Props = {
  children: React.ReactNode,
}

function FullScreenWrapper({ children }: Props) {
  return (
    <View style={{ width, height }}>
      {children}
    </View>
  );
}

FullScreenWrapper.defaultProps = {};

export default FullScreenWrapper;
