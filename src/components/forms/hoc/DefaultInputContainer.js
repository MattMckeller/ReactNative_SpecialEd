// @flow
import React from 'react';
import { View } from 'react-native';
import globalStyles from '../../../assets/styles/GlobalStyles';

type Props = {}
// Todo figure out typing with HOC
const defaultInputContainer = WrappedComponent => (props: Props) => {
  const { defaultInputContainerStyle } = globalStyles;
  return (
    <View style={defaultInputContainerStyle}>
      <WrappedComponent {...props} />
    </View>
  );
};

export default defaultInputContainer;
