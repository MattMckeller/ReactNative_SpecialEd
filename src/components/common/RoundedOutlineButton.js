// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text, TouchableOpacity, View,
} from 'react-native';
import styleVariables from '../../assets/StyleVariables';

// todo create/user generic button type
type Props = {
  label: string,
  height?: number | string,
  onPress: () => {},
  disabled?: boolean,
  textColor?: string,
  buttonContainerStyle?: {},
}
class RoundedButtonOutline extends Component<Props> {
  constructor() {
    super();
    this._onPress = this._onPress.bind(this);
  }

  render() {
    const {
      defaultContainerStyle,
      textStyle,
      touchableHighlightStyle,
      disabledStyle,
    } = styles;
    const {
      label, height, disabled, textColor, buttonContainerStyle,
    } = this.props;
    let updatedButtonContainerStyle = (disabled)
      ? ({ ...defaultContainerStyle, ...disabledStyle }) : (defaultContainerStyle);
    updatedButtonContainerStyle = (buttonContainerStyle)
      ? ({ ...updatedButtonContainerStyle, ...buttonContainerStyle })
      : (updatedButtonContainerStyle);
    const mergedTextStyle = (textColor) ? ({ ...textStyle, ...{ color: textColor } }) : (textStyle);
    return (
      <TouchableOpacity
        onPress={this._onPress}
        style={touchableHighlightStyle}
        disabled={disabled}
      >
        <View style={{ ...updatedButtonContainerStyle, ...{ height } }}>
          <Text style={mergedTextStyle}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  _onPress() {
    const { onPress } = this.props;
    onPress();
  }
}

RoundedButtonOutline.defaultProps = {
  height: 50,
  disabled: false,
};

const styles = {
  touchableHighlightStyle: {
    borderRadius: 25,
  },
  defaultContainerStyle: {
    backgroundColor: 'transparent',
    width: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: styleVariables.outlineButtonBorderColor,
    borderWidth: 1,
  },
  disabledStyle: {
    backgroundColor: styleVariables.disabledButtonColor,
  },
  textStyle: {
    color: styleVariables.outlineButtonTextColor,
    fontWeight: 'bold',
    fontSize: 20,
  },
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(RoundedButtonOutline);
