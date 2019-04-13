// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text, TextInput, TouchableWithoutFeedback, View,
} from 'react-native';
import { Icon } from 'native-base';

// todo update types from redux form
type Props = {
  label: string,
  value: string,
  shouldDisplayErrorMessage: boolean,
  input: any,
  meta: any,
  labelIcon?: string,
  secureTextEntry?: boolean,
}
class RoundedTextInput extends Component<Props> {
  // todo fix type to be from react create ref type
  textInput: TextInput;

  constructor() {
    super();
    this._onLabelPress = this._onLabelPress.bind(this);
    this._onChangeText = this._onChangeText.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this.textInput = React.createRef();
    this.state = {
      ...this.state,
      // + additional
    };
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
      containerStyle, textStyle, hasIconTextStyle, errorTextStyle,
    } = styles.labelStyle;
    const {
      focusedTextContainerStyle, defaultTextContainerStyle,
      textContainerHasIconStyle, textContainerNoIconStyle,
      labelGroupContainerStyle,
    } = containerStyle;
    const { meta, input } = this.props;
    const { error, active } = meta;
    const { value } = input;
    const {
      label, labelIcon, shouldDisplayErrorMessage,
    } = this.props;

    let fullTextStyle = (labelIcon && labelIcon.length)
      ? ({ ...textStyle, ...hasIconTextStyle }) : (textStyle);
    fullTextStyle = (shouldDisplayErrorMessage)
      ? ({ ...fullTextStyle, ...errorTextStyle }) : (fullTextStyle);

    let fullTextContainerStyle = (
      active || (value && value.length) || shouldDisplayErrorMessage
    ) ? focusedTextContainerStyle : defaultTextContainerStyle;
    fullTextContainerStyle = (labelIcon && labelIcon.length)
      ? ({ ...fullTextContainerStyle, ...textContainerHasIconStyle })
      : ({ ...fullTextContainerStyle, ...textContainerNoIconStyle });

    const displayedText = (shouldDisplayErrorMessage && error)
      ? (error) : label;

    return (
      <View style={labelGroupContainerStyle}>
        <View style={fullTextContainerStyle}>
          <Text style={fullTextStyle}>
            {displayedText}
          </Text>
        </View>
        {this.renderIcon()}
      </View>
    );
  }

  render() {
    const { labelIcon, secureTextEntry, input } = this.props;
    const { value } = input;
    const { textInputStyle, containerStyle } = styles;
    const { standardTextInputStyle, withIconStyle } = textInputStyle;
    const fullTextInputStyle = (labelIcon && labelIcon.length)
      ? ({ ...standardTextInputStyle, ...withIconStyle }) : (standardTextInputStyle);
    return (
      <View style={containerStyle}>
        <TextInput
          ref={this.textInput}
          style={fullTextInputStyle}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          onChangeText={this._onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
        />
        <TouchableWithoutFeedback onPress={this._onLabelPress}>
          {this.renderLabel()}
        </TouchableWithoutFeedback>
      </View>
    );
  }

  _onLabelPress() {
    this.textInput.current.focus();
  }

  _onFocus() {
    const { input } = this.props;
    const { onFocus } = input;
    if (onFocus) {
      onFocus();
    }
  }

  _onBlur() {
    const { input } = this.props;
    const { onBlur } = input;
    if (onBlur) {
      onBlur();
    }
  }

  _onChangeText(text) {
    const { input } = this.props;
    const { onChange } = input;
    if (onChange) {
      onChange(text);
    }
  }
}

RoundedTextInput.defaultProps = {
  labelIcon: null,
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
    errorTextStyle: {
      color: 'red',
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
