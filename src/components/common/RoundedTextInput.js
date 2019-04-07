// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text, TextInput, TouchableWithoutFeedback, View,
} from 'react-native';
import { Icon } from 'native-base';
import type { Validator } from '../../utility/validation/Validate';
import Validate from '../../utility/validation/Validate';

type Props = {
  label: string,
  labelIcon?: string,
  value: string,
  onChangeText?: (text: string) => void,
  onChangeTouch?: (touched: boolean) => void,
  onValidate?: (valid: boolean) => void,
  onDisplayErrorMessage?: (displaying: boolean) => void,
  secureTextEntry?: boolean,
  displayErrorMessages?: boolean,
  displayCurrentErrors?: boolean,
  validationRules?: Validator[],
}
class RoundedTextInput extends Component<Props> {
  state = {
    isFocused: false,
    hasError: false,
    touched: false,
    errorMessages: [],
    displayingErrorMessage: false,
  };

  textInput: TextInput;

  constructor() {
    super();
    this._onLabelPress = this._onLabelPress.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onChangeText = this._onChangeText.bind(this);
    this._clearErrors = this._clearErrors.bind(this);
    this.validate = this.validate.bind(this);
    this.isValid = this.isValid.bind(this);
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
    const { isFocused, hasError, errorMessages } = this.state;
    const {
      label, labelIcon, value,
      displayErrorMessages,
    } = this.props;

    let fullTextStyle = (labelIcon && labelIcon.length)
      ? ({ ...textStyle, ...hasIconTextStyle }) : (textStyle);
    fullTextStyle = (displayErrorMessages && hasError)
      ? ({ ...fullTextStyle, ...errorTextStyle }) : (fullTextStyle);

    let fullTextContainerStyle = (isFocused || value.length || (displayErrorMessages && hasError))
      ? focusedTextContainerStyle : defaultTextContainerStyle;
    fullTextContainerStyle = (labelIcon && labelIcon.length)
      ? ({ ...fullTextContainerStyle, ...textContainerHasIconStyle })
      : ({ ...fullTextContainerStyle, ...textContainerNoIconStyle });

    const displayedText = (displayErrorMessages && hasError && errorMessages.length)
      ? (errorMessages[0]) : label;

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

  componentWillReceiveProps(nextProps: Readonly<P>): void {
    const { displayCurrentErrors, value } = nextProps;
    const {
      displayCurrentErrors: activeDisplayCurrentErrors,
      displayingErrorMessage,
      value: oldValue,
    } = this.state;
    if (displayingErrorMessage === false
      && displayCurrentErrors
      && displayCurrentErrors !== activeDisplayCurrentErrors) {
      this.validate();
    } else if ((value || oldValue) && value !== oldValue) {
      this.validate();
    }
  }

  render() {
    const { value, labelIcon, secureTextEntry } = this.props;
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
          value={value}
          secureTextEntry={secureTextEntry}
        />
        <TouchableWithoutFeedback onPress={this._onLabelPress}>
          {this.renderLabel()}
        </TouchableWithoutFeedback>
      </View>
    );
  }

  setTouched(updateValue: boolean) {
    const { touched } = this.state;
    const { onChangeTouch } = this.props;
    if (touched !== updateValue) {
      this.setState({ touched: updateValue });
      if (onChangeTouch) {
        onChangeTouch(updateValue);
      }
    }
  }

  validate(displayErrorMessage: boolean = true): boolean {
    const { onValidate, onDisplayErrorMessage } = this.props;
    const results = this.isValid();
    const { valid, errorMessages } = results;
    const { hasError, displayingErrorMessage } = this.state;
    const hasChanged = (valid === hasError);
    if (!valid && hasChanged) {
      let newState = { hasError: true };
      newState = (displayErrorMessage)
        ? ({ ...newState, errorMessages, displayingErrorMessage: true })
        : (newState);
      this.setState(newState);
      if (onDisplayErrorMessage && displayErrorMessage && !displayingErrorMessage) {
        onDisplayErrorMessage(true);
      }
    } else if (valid && hasChanged) {
      this._clearErrors();
    }
    if (hasChanged && onValidate) {
      onValidate(valid);
    }
    return valid;
  }

  isValid(): { valid: boolean, errorMessages: string[] } {
    const { validationRules, value } = this.props;
    if (validationRules.length) {
      const validationResults = Validate(value, validationRules);
      return {
        valid: (validationResults === true),
        errorMessages: (validationResults === true) ? [] : validationResults,
      };
    }
    return {
      valid: true,
      errorMessages: [],
    };
  }

  _onChangeText(newText) {
    const { onChangeText } = this.props;
    onChangeText(newText);
  }

  _onLabelPress() {
    this.textInput.focus();
  }

  _onFocus() {
    this.setState({ isFocused: true });
    this._clearErrors();
  }

  _onBlur() {
    this.setState({ isFocused: false });
    this.setTouched(true);
    this.validate();
  }

  _clearErrors() {
    const { onDisplayErrorMessage } = this.props;
    const { displayingErrorMessage } = this.state;
    this.setState({
      hasError: false,
      errorMessages: [],
      displayingErrorMessage: false,
    });
    if (onDisplayErrorMessage && displayingErrorMessage) {
      onDisplayErrorMessage(false);
    }
  }
}

RoundedTextInput.defaultProps = {
  labelIcon: null,
  onChangeText: null,
  onChangeTouch: null,
  onValidate: null,
  onDisplayErrorMessage: null,
  secureTextEntry: false,
  displayErrorMessages: true,
  displayCurrentErrors: false,
  validationRules: [],
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
