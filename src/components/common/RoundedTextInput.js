// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text, TextInput, TouchableWithoutFeedback, View,
} from 'react-native';
import { Icon } from 'native-base';

type Props = {
  label: string,
  labelIcon?: string,
  onChangeText?: (text) => {},
  secureTextEntry?: boolean,
}
class RoundedTextInput extends Component<Props> {
  state = {
    isFocused: false,
    text: '',
  };

  textInput: TextInput;

  constructor() {
    super();
    this._onLabelPress = this._onLabelPress.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onChangeText = this._onChangeText.bind(this);
  }

  renderIcon() {
    const { labelIcon } = this.props;
    const { iconStyle } = styles;
    if (labelIcon && labelIcon.length) {
      return (
        <Icon
          style={iconStyle}
          name={labelIcon}
        />
      );
    }
    return null;
  }

  renderLabel() {
    const {
      containerStyle, textStyle, hasIconTextStyle,
    } = styles.labelStyle;
    const {
      focusedTextContainerStyle, defaultTextContainerStyle,
      textContainerHasIconStyle, textContainerNoIconStyle,
      labelGroupContainerStyle,
    } = containerStyle;
    const { isFocused, text } = this.state;
    const { label, labelIcon } = this.props;

    const fullTextStyle = (labelIcon && labelIcon.length)
      ? ({ ...textStyle, ...hasIconTextStyle }) : (textStyle);

    let fullTextContainerStyle = (isFocused || text.length)
      ? focusedTextContainerStyle : defaultTextContainerStyle;
    fullTextContainerStyle = (labelIcon && labelIcon.length)
      ? ({ ...fullTextContainerStyle, ...textContainerHasIconStyle })
      : ({ ...fullTextContainerStyle, ...textContainerNoIconStyle });

    return (
      <View style={labelGroupContainerStyle}>
        <View style={fullTextContainerStyle}>
          <Text style={fullTextStyle}>
            {label}
          </Text>
        </View>
        {this.renderIcon()}
      </View>
    );
  }

  render() {
    const { text } = this.state;
    const { labelIcon, secureTextEntry } = this.props;
    const { textInputStyle, containerStyle } = styles;
    const { standardTextInputStyle, withIconStyle } = textInputStyle;
    const fullTextInputStyle = (labelIcon && labelIcon.length)
      ? ({ ...standardTextInputStyle, ...withIconStyle }) : (standardTextInputStyle);
    return (
      <View style={containerStyle}>
        <TextInput
          ref={(input) => { this.textInput = input; }}
          style={fullTextInputStyle}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          onChangeText={this._onChangeText}
          secureTextEntry={secureTextEntry}
          value={text}
        />
        <TouchableWithoutFeedback onPress={this._onLabelPress}>
          {this.renderLabel()}
        </TouchableWithoutFeedback>
      </View>
    );
  }

  _onChangeText(newText) {
    const { onChangeText } = this.props;
    this.setState({ text: newText });
    if (onChangeText) {
      onChangeText(newText);
    }
  }

  _onLabelPress() {
    this.textInput.focus();
  }

  _onFocus() {
    this.setState({ isFocused: true });
  }

  _onBlur() {
    this.setState({ isFocused: false });
  }
}

RoundedTextInput.defaultProps = {
  labelIcon: null,
  onChangeText: null,
  secureTextEntry: false,
};

const styles = {
  labelStyle: {
    containerStyle: {
      focusedTextContainerStyle: {
        position: 'absolute',
        top: 2,
        flex: 1,
        flexDirection: 'row',
      },
      defaultTextContainerStyle: {
        position: 'absolute',
        top: 15,
        flex: 1,
        flexDirection: 'row',
      },
      textContainerHasIconStyle: {
        left: 29,
      },
      textContainerNoIconStyle: {
        left: 15,
      },
      labelGroupContainerStyle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
    },
    textStyle: {
      color: 'gray',
    },
    hasIconTextStyle: {
      paddingLeft: 16,
    },
  },
  textInputStyle: {
    standardTextInputStyle: {
      backgroundColor: 'white',
      height: 50,
      borderRadius: 25,
      paddingLeft: 15,
    },
    withIconStyle: {
      paddingLeft: 45,
    },
  },
  iconStyle: {
    fontSize: 20,
    width: 20,
    position: 'absolute',
    top: 13,
    left: 15,
  },
  containerStyle: {
    width: '100%',
  },
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(RoundedTextInput);
