// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, KeyboardAvoidingView, Keyboard,
} from 'react-native';
import {
  Field, FormProps, reduxForm, formValueSelector,
} from 'redux-form';
import globalStyles from '../assets/styles/GlobalStyles';
import RoundedTextInput from './common/RoundedTextInput';
import RoundedButton from './common/RoundedButton';
import styleVariables from '../assets/StyleVariables';
import { emailChanged, loginUser, passwordChanged } from '../actions';
import CenteredSpinner from './common/CenteredSpinner';
import Required from '../utility/validation/Required';
import MinLength from '../utility/validation/MinLength';
import Validate from '../utility/validation/Validate';
import autoFormErrorDisplay from './hoc/AutoFormErrorDisplay';

const FORM_NAME = 'loginForm';
const EMAIL_INPUT_NAME = 'email';
const PASSWORD_INPUT_NAME = 'password';
const InputComponent = autoFormErrorDisplay(RoundedTextInput);

type Props = {
  emailChangedAction: (text: string) => {}, // todo delete unused actions and reducers
  passwordChangedAction: (text: string) => {},
  loginUserAction: ({email: string, password: string}) => {},
  email: string,
  password: string,
  loading: boolean,
} & FormProps
class LoginForm extends Component<Props> {
  state = {
    [EMAIL_INPUT_NAME]: {
      previouslyDisplayedError: false,
      shouldDisplayError: false,
      valid: null,
    },
    [PASSWORD_INPUT_NAME]: {
      previouslyDisplayedError: false,
      shouldDisplayError: false,
      valid: null,
    },
  };

  // todo update validation rules
  emailValidationRules = [
    value => Validate(value, [
      Required({ fieldName: 'Email Address' }),
      MinLength({ fieldName: 'Email Address', length: 5 }),
    ]),
  ];

  // todo update validation rules
  passwordValidationRules = [
    value => Validate(value, [
      Required({ fieldName: 'Password' }),
      MinLength({ fieldName: 'Password', length: 5 }),
    ]),
  ];

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.shouldDisableSubmitButton = this.shouldDisableSubmitButton.bind(this);
    this.onErrorStateChange = this.onErrorStateChange.bind(this);
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
    const {
      handleSubmit,
    } = this.props;
    const shouldDisableSubmitButton = this.shouldDisableSubmitButton();
    return (
      <View style={flexRow}>
        <View style={{ ...flexColumn, ...containerStyle }}>
          <KeyboardAvoidingView behavior="padding" style={wrapperStyle}>
            <View style={inputContainerStyle}>
              <Field
                name={EMAIL_INPUT_NAME}
                onErrorStateChange={this.onErrorStateChange}
                label="Email Address"
                component={InputComponent}
                labelIcon="person"
                validate={this.emailValidationRules}
              />
            </View>
            <View style={inputContainerStyle}>
              <Field
                name={PASSWORD_INPUT_NAME}
                onErrorStateChange={this.onErrorStateChange}
                label="Password"
                labelIcon="lock"
                secureTextEntry
                component={InputComponent}
                validate={this.passwordValidationRules}
              />
            </View>
            <View style={submitButtonContainerStyle}>
              <RoundedButton
                onPress={handleSubmit(this.onSubmit)}
                disabled={shouldDisableSubmitButton}
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

  onErrorStateChange(errorDisplayData: {
                                name: string,
                                shouldDisplayError: boolean,
                                previouslyDisplayedError: boolean,
                                valid: boolean,
                              }) {
    const {
      name, valid, shouldDisplayError, previouslyDisplayedError,
    } = errorDisplayData;
    this.setState({
      [name]: {
        shouldDisplayError,
        previouslyDisplayedError,
        valid,
      },
    });
  }

  shouldDisableSubmitButton() {
    const { submitting } = this.props;
    const {
      [EMAIL_INPUT_NAME]: emailInputState,
      [PASSWORD_INPUT_NAME]: passwordInputState,
    } = this.state;
    return (emailInputState.shouldDisplayError || passwordInputState.shouldDisplayError)
      || (emailInputState.previouslyDisplayedError && !emailInputState.valid)
      || (passwordInputState.previouslyDisplayedError && !passwordInputState.valid)
      || submitting;
  }

  // todo not returning a promise, submitting is set from promise -- how to handle this
  onSubmit(data) {
    console.log('submit data', data);
    // const { loginUserAction, email, password } = this.props;
    Keyboard.dismiss();
    // if (this.formIsValid()) {
    //   loginUserAction({ email, password });
    // }
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
    email: selector(state, EMAIL_INPUT_NAME),
    password: selector(state, PASSWORD_INPUT_NAME),
    error: auth.error,
    loading: auth.loading,
  };
};

const selector = formValueSelector(FORM_NAME);
LoginForm = reduxForm({
  form: FORM_NAME,
})(LoginForm);

export default connect(mapStateToProps, {
  emailChangedAction: emailChanged,
  passwordChangedAction: passwordChanged,
  loginUserAction: loginUser,
})(LoginForm);
