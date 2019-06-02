// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Text, TouchableHighlight, View,
} from 'react-native';
import styleVariables from '../../../assets/StyleVariables';

type Props = {
  label: string,
  height?: number | string,
  onPress: () => {},
  disabled?: boolean,
}
const RoundedButton = (props: Props) => {
  const {
    buttonContainerStyle, textStyle, touchableHighlightStyle, disabledStyle,
  } = styles;
  const {
    label, height, disabled, onPress,
  } = props;
  const updatedButtonContainerStyle = (disabled)
    ? ({ ...buttonContainerStyle, ...disabledStyle }) : (buttonContainerStyle);
  return (
    <TouchableHighlight
      onPress={onPress}
      style={touchableHighlightStyle}
      disabled={disabled}
    >
      <View style={{ ...updatedButtonContainerStyle, ...{ height } }}>
        <Text style={textStyle}>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

RoundedButton.defaultProps = {
  height: 50,
  disabled: false,
};

const styles = {
  touchableHighlightStyle: {
    borderRadius: 25,
  },
  buttonContainerStyle: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledStyle: {
    backgroundColor: styleVariables.disabledButtonColor,
  },
  textStyle: {
    color: styleVariables.primaryColor,
    fontWeight: 'bold',
    fontSize: 20,
  },
};


export default RoundedButton;
