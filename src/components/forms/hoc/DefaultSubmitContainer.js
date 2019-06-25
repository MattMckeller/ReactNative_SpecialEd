// @flow
import React from 'react';
import { View } from 'react-native';
import globalStyles from '../../../assets/styles/GlobalStyles';

type Props = {
}
// Todo figure out typing with HOC
const defaultSubmitContainer = WrappedComponent => (props: Props) => {
  const { defaultSubmitContainerStyle } = globalStyles;
  return (
    <View style={defaultSubmitContainerStyle}>
      <WrappedComponent {...props} />
    </View>
  );
};

export default defaultSubmitContainer;
