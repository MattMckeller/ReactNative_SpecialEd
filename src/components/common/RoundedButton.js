// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Text, TouchableHighlight, View,
} from 'react-native';
import styleVariables from '../../assets/StyleVariables';

type Props = {
  title: string,
  height?: number | string,
  onPress: () => {},
  disabled?: boolean,
}
class RoundedButton extends Component<Props> {
  constructor() {
    super();
    this._onPress = this._onPress.bind(this);
  }

  render() {
    const {
      buttonContainerStyle, textStyle, touchableHighlightStyle, disabledStyle,
    } = styles;
    const { title, height, disabled } = this.props;
    const updatedButtonContainerStyle = (disabled)
      ? ({ ...buttonContainerStyle, ...disabledStyle }) : (buttonContainerStyle);
    return (
      <TouchableHighlight
        onPress={this._onPress}
        style={touchableHighlightStyle}
        disabled={disabled}
      >
        <View style={{ ...updatedButtonContainerStyle, ...{ height } }}>
          <Text style={textStyle}>{title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _onPress() {
    const { onPress } = this.props;
    onPress();
  }
}

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

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(RoundedButton);
