// @flow
import React, { Component } from 'react';
import {
  ScrollView,
  Text, TextInput, TouchableWithoutFeedback, View,
} from 'react-native';
import {
  FontAwesome5,
} from '@expo/vector-icons';
import globalStyles from '../../../assets/styles/GlobalStyles';

// todo update types from redux form
type Props = {
  label: string,
  value: string,
  shouldDisplayErrorMessage: boolean,
  input: any,
  meta: any,
  labelIcon?: string,
  iconType?: string,
  secureTextEntry?: boolean,
  forceErrorDisplay?: boolean,
}

class RoundedTextInput extends Component<Props> {
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
    const { labelIcon, iconType } = this.props;
    const { iconStyle } = styles;
    if (labelIcon && labelIcon.length) {
      return (
        <FontAwesome5
          style={iconStyle}
          name={labelIcon}
          // type={iconType}
        />
      );
    }
    return null;
  }

  renderLabel() {
    const {
      containerStyle, textStyle, hasIconTextStyle,
    } = styles.labelStyle;
    const { errorTextStyle } = globalStyles;
    const {
      focusedTextContainerStyle, defaultTextContainerStyle,
      textContainerHasIconStyle, textContainerNoIconStyle,
      labelGroupContainerStyle,
    } = containerStyle;
    const { meta, input } = this.props;
    const { error, active } = meta;
    const { value } = input;
    const {
      label, labelIcon, shouldDisplayErrorMessage, forceErrorDisplay,
    } = this.props;

    const doDisplayErrorMessage = (shouldDisplayErrorMessage || forceErrorDisplay)
      && error;

    let fullTextStyle = (labelIcon && labelIcon.length)
      ? ({ ...textStyle, ...hasIconTextStyle }) : (textStyle);
    fullTextStyle = (doDisplayErrorMessage)
      ? ({ ...fullTextStyle, ...errorTextStyle }) : (fullTextStyle);

    let fullTextContainerStyle = (
      active || (value && value.length) || doDisplayErrorMessage
    ) ? focusedTextContainerStyle : defaultTextContainerStyle;
    fullTextContainerStyle = (labelIcon && labelIcon.length)
      ? ({ ...fullTextContainerStyle, ...textContainerHasIconStyle })
      : ({ ...fullTextContainerStyle, ...textContainerNoIconStyle });

    const displayedText = (doDisplayErrorMessage)
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
      <ScrollView style={containerStyle} keyboardShouldPersistTaps="never">
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
      </ScrollView>
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
  iconType: 'FontAwesome5',
  forceErrorDisplay: false,
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


export default RoundedTextInput;
