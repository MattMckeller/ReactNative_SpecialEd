// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, KeyboardAvoidingView, Keyboard,
} from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';
import RoundedTextInput from './common/RoundedTextInput';
import RoundedButton from './common/RoundedButton';
import styleVariables from '../assets/StyleVariables';
import { emailChanged, loginUser, passwordChanged } from '../actions';
import CenteredSpinner from './common/CenteredSpinner';
import Required from '../utility/validation/Required';

// todo refactor into generic form component
type Props = {
  emailChangedAction: (text: string) => {},
  passwordChangedAction: (text: string) => {},
  loginUserAction: ({email: string, password: string}) => {},
  email: string,
  password: string,
  loading: boolean,
}
class LoginForm extends Component<Props> {
  state = {
    formIsValid: true,
    submitButtonDisabled: false,
    displayCurrentErrors: false,
    inputFields: {
      emailAddressInput: {
        ref: null,
        value: '',
        isValid: false,
        displayingError: false,
      },
      passwordInput: {
        ref: null,
        value: '',
        isValid: false,
        displayingError: false,
      },
    },
  };

  constructor() {
    super();
    this.onPasswordChanged = this.onPasswordChanged.bind(this);
    this.onEmailChanged = this.onEmailChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.setEmailRef = this.setEmailRef.bind(this);
    this.setPasswordRef = this.setPasswordRef.bind(this);
    this.onValidate = this.onValidate.bind(this);
    this.checkForDisplayedErrors = this.checkForDisplayedErrors.bind(this);
    this.onEmailErrorMessageChange = this.onEmailErrorMessageChange.bind(this);
    this.onPasswordErrorMessageChange = this.onPasswordErrorMessageChange.bind(this);
  }

  renderSpinner() {
    const { loading } = this.props;
    if (loading === true) {
      return (
        <CenteredSpinner />
      );
    }
    return null;
  }

  render() {
    const {
      wrapperStyle,
      containerStyle,
      inputContainerStyle,
      submitButtonContainerStyle,
    } = styles;
    const { flexRow, flexColumn } = globalStyles;
    const { email, password } = this.props;
    const { submitButtonDisabled, displayCurrentErrors } = this.state;
    return (
      <View style={flexRow}>
        <View style={{ ...flexColumn, ...containerStyle }}>
          <KeyboardAvoidingView behavior="padding" style={wrapperStyle}>
            <View style={inputContainerStyle}>
              <RoundedTextInput
                ref={this.setEmailRef}
                onChangeText={this.onEmailChanged}
                onValidate={(valid) => { this.onValidate(valid, 'emailAddressInput'); }}
                displayCurrentErrors={displayCurrentErrors}
                onDisplayErrorMessage={this.onEmailErrorMessageChange}
                value={email}
                label="Email Address"
                labelIcon="person"
                validationRules={[Required({ fieldName: 'Email Address' })]}
              />
            </View>
            <View style={inputContainerStyle}>
              <RoundedTextInput
                ref={this.setPasswordRef}
                onChangeText={this.onPasswordChanged}
                onValidate={(valid) => { this.onValidate(valid, 'passwordInput'); }}
                displayCurrentErrors={displayCurrentErrors}
                onDisplayErrorMessage={this.onPasswordErrorMessageChange}
                value={password}
                label="Password"
                labelIcon="lock"
                secureTextEntry
                validationRules={[Required({ fieldName: 'Password' })]}
              />
            </View>
            <View style={submitButtonContainerStyle}>
              <RoundedButton
                onPress={this.onSubmit}
                disabled={submitButtonDisabled}
                title="Sign In"
                height={60}
              />
            </View>
          </KeyboardAvoidingView>
          {this.renderSpinner()}
        </View>
      </View>
    );
  }

  onValidate(valid: boolean, inputKey: string) {
    const { inputFields } = this.state;
    const newState = { inputFields: { ...inputFields } };
    newState.inputFields[inputKey].isValid = valid;
    this.setState(newState);
  }

  formIsValid() {
    const { inputFields, formIsValid } = this.state;
    let hasInit = false;
    let isValid = true;
    Object.keys(inputFields).forEach((key) => {
      const { ref } = inputFields[key];
      if (ref === null) {
        return 0;
      }
      hasInit = true;
      isValid = isValid && inputFields[key].isValid;
      return 0;
    });
    isValid = (hasInit && isValid);
    const newState = { ...this.state, formIsValid: isValid };
    if (formIsValid !== isValid) {
      this.setState(newState);
    }
    return isValid;
  }

  onEmailChanged(text) {
    const { emailChangedAction } = this.props;
    const newStateInput = { ...this.state };
    newStateInput.inputFields.emailAddressInput.value = text;
    this.setState(newStateInput);
    emailChangedAction(text);
    this.formIsValid();
    this.checkForDisplayedErrors();
  }

  onPasswordChanged(text) {
    const { passwordChangedAction } = this.props;
    const newStateInput = { ...this.state };
    newStateInput.inputFields.passwordInput.value = text;
    this.setState(newStateInput);
    passwordChangedAction(text);
    this.formIsValid();
    this.checkForDisplayedErrors();
  }

  setEmailRef(input) {
    const newState = { ...this.state };
    newState.inputFields.emailAddressInput.ref = input;
    this.setState(newState);
  }

  setPasswordRef(input) {
    const newState = { ...this.state };
    newState.inputFields.passwordInput.ref = input;
    this.setState(newState);
  }

  onPasswordErrorMessageChange(displayingMessage: boolean) {
    const newState = { ...this.state };
    const { displayingError } = newState.inputFields.passwordInput;
    newState.inputFields.passwordInput.displayingError = displayingMessage;
    if (displayingError !== displayingMessage) {
      this.setState(newState);
    }
    this.checkForDisplayedErrors();
  }

  onEmailErrorMessageChange(displayingMessage: boolean) {
    const newState = { ...this.state };
    const { displayingError } = newState.inputFields.emailAddressInput;
    newState.inputFields.emailAddressInput.displayingError = displayingMessage;
    if (displayingError !== displayingMessage) {
      this.setState(newState);
    }
    this.checkForDisplayedErrors();
  }

  checkForDisplayedErrors() {
    let displayingError = false;
    const { inputFields, submitButtonDisabled } = this.state;
    Object.keys(inputFields).forEach((key) => {
      const inputField = inputFields[key];
      displayingError = (inputField.displayingError) ? (true) : (displayingError);
    });
    if (displayingError && submitButtonDisabled === false) {
      this.setState({ submitButtonDisabled: true });
    } else if (displayingError === false && submitButtonDisabled === true) {
      this.setState({ submitButtonDisabled: false });
    }
    return displayingError;
  }

  displayErrorMessages(shouldDisplay: boolean) {
    this.setState({ displayCurrentErrors: shouldDisplay });
  }

  onSubmit() {
    const { loginUserAction, email, password } = this.props;
    Keyboard.dismiss();
    if (this.formIsValid()) {
      loginUserAction({ email, password });
    } else {
      // Disable submit button if button is pushed and form is not valid
      this.setState({ submitButtonDisabled: true });
      this.displayErrorMessages(true);
    }
  }
}

const styles = {
  containerStyle: {
    backgroundColor: styleVariables.primaryColor,
  },
  wrapperStyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerStyle: {
    width: '95%',
    marginBottom: 20,
  },
  submitButtonContainerStyle: {
    marginTop: 15,
    width: '95%',
  },
};

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    email: auth.email,
    password: auth.password,
    error: auth.error,
    loading: auth.loading,
  };
};

export default connect(mapStateToProps, {
  emailChangedAction: emailChanged,
  passwordChangedAction: passwordChanged,
  loginUserAction: loginUser,
})(LoginForm);
