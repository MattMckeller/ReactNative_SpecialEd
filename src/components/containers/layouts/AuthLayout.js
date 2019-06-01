/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import globalStyles from '../../../assets/styles/GlobalStyles';

type Props = {
  children: any
};
class AuthLayout extends Component<Props> {
  // todo change scrollview location - is preventing jumping from input to input
  render() {
    const { children } = this.props;
    const { flexRow, flexColumn } = globalStyles;
    return (
      <View style={flexColumn}>
        <View style={flexRow}>
          {children}
        </View>
      </View>
    );
  }
}

const styles = {};

export default AuthLayout;
