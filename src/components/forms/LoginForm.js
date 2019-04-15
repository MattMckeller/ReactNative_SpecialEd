// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, KeyboardAvoidingView, Keyboard,
} from 'react-native';
import { Toast } from 'native-base';
import {
  Field, FormProps, reduxForm, formValueSelector,
} from 'redux-form';
import globalStyles from '../../assets/styles/GlobalStyles';
import RoundedTextInput from '../common/RoundedTextInput';
import RoundedButton from '../common/RoundedButton';
import { didShowErrorToast, loginUser } from '../../actions';
import CenteredSpinner from '../common/CenteredSpinner';
import Required from '../../utility/validation/Required';
import MinLength from '../../utility/validation/MinLength';
import Validate from '../../utility/validation/Validate';
import autoFormErrorDisplay from '../hoc/AutoFormErrorDisplay';
import SubmitButtonHelper from '../../utility/helpers/SubmitButtonHelper';
import type { SubmitButtonErrorDisplayData } from '../../utility/helpers/SubmitButtonHelper';
import styleVariables from '../../assets/StyleVariables';

const FORM_NAME = 'loginForm';
const EMAIL_INPUT_NAME = 'email';
const PASSWORD_INPUT_NAME = 'password';
const InputComponent = autoFormErrorDisplay(RoundedTextInput);

type Props = {
  emailChangedAction: (text: string) => {}, // todo delete unused actions and reducers
  passwordChangedAction: (text: string) => {},
  loginUserAction: ({email: string, password: string}) => void,
  didShowErrorToastAction: () => void,
  email: string,
  password: string,
  loading: boolean,
  authError: string,
  shouldOpenErrorToast: boolean,
} & FormProps
class LoginForm extends Component<Props> {
  state = {
    shouldDisableSubmitButton: false,
    forceDisplayErrorMessages: false,
  };

  submitButtonHelper: SubmitButtonHelper = new SubmitButtonHelper(
    [EMAIL_INPUT_NAME, PASSWORD_INPUT_NAME],
  );

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
    this.onErrorStateChange = this.onErrorStateChange.bind(this);
    this.checkSubmitButtonStatus = this.checkSubmitButtonStatus.bind(this);
    this.onSubmitErrorChecker = this.onSubmitErrorChecker.bind(this);
    this.showErrorToast = this.showErrorToast.bind(this);
  }

  componentDidUpdate(): void {
    const { shouldOpenErrorToast } = this.props;
    if (shouldOpenErrorToast === true) {
      this.showErrorToast();
    }
  }

  // todo move loading to spinner component
  renderSpinner() {
    const { loading } = this.props;
    if (loading === true) {
      return (
        <CenteredSpinner />
      );
    }
    return null;
  }

  showErrorToast() {
    const { authError, didShowErrorToastAction } = this.props;
    Toast.show({
      text: authError,
      buttonText: 'Okay',
      duration: 10000,
      type: 'danger',
      style: {
        backgroundColor: styleVariables.errorColor,
      },
    });
    didShowErrorToastAction();
  }

  render() {
    const {
      wrapperStyle,
      inputContainerStyle,
      submitButtonContainerStyle,
    } = styles;
    const { flexColumn } = globalStyles;
    const { shouldDisableSubmitButton, forceDisplayErrorMessages } = this.state;
    // todo do I even need the first view
    // todo fix focusing of inputs
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ ...flexColumn }}>
          <KeyboardAvoidingView behavior="padding" style={wrapperStyle}>
            <View style={inputContainerStyle}>
              <Field
                name={EMAIL_INPUT_NAME}
                onErrorStateChange={this.onErrorStateChange}
                label="Email Address"
                component={InputComponent}
                labelIcon="person"
                iconType="MaterialIcons"
                validate={this.emailValidationRules}
                forceDisplayErrorMessage={forceDisplayErrorMessages}
              />
            </View>
            <View style={inputContainerStyle}>
              <Field
                name={PASSWORD_INPUT_NAME}
                onErrorStateChange={this.onErrorStateChange}
                label="Password"
                labelIcon="lock"
                iconType="MaterialIcons"
                secureTextEntry
                component={InputComponent}
                validate={this.passwordValidationRules}
                forceDisplayErrorMessage={forceDisplayErrorMessages}
              />
            </View>
            <View style={submitButtonContainerStyle}>
              <RoundedButton
                onPress={this.onSubmitErrorChecker}
                disabled={shouldDisableSubmitButton}
                label="Sign In"
                height={60}
              />
            </View>
          </KeyboardAvoidingView>
          {this.renderSpinner()}
        </View>
      </View>
    );
  }

  onErrorStateChange(errorData: SubmitButtonErrorDisplayData) {
    this.submitButtonHelper.onErrorStateChange(errorData);
    this.checkSubmitButtonStatus();
  }

  checkSubmitButtonStatus() {
    const { loading, valid } = this.props;
    const { shouldDisableSubmitButton, forceDisplayErrorMessages } = this.state;
    const updatedDisableSubmitState = this.submitButtonHelper.shouldDisableSubmitButton()
      || loading || (forceDisplayErrorMessages && !valid);
    if (updatedDisableSubmitState !== shouldDisableSubmitButton) {
      this.setState({ shouldDisableSubmitButton: updatedDisableSubmitState });
    }
  }

  onSubmitErrorChecker() {
    const { valid } = this.props;
    if (!valid) {
      this.setState({ forceDisplayErrorMessages: true });
    } else {
      this.onSubmit();
    }
  }

  onSubmit() {
    const {
      email, password, valid, loginUserAction,
    } = this.props;
    Keyboard.dismiss();
    if (valid) {
      loginUserAction({ email, password });
    }
  }
}

const styles = {
  wrapperStyle: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerStyle: {
    marginBottom: 20,
    width: '100%',
  },
  submitButtonContainerStyle: {
    marginTop: 15,
    width: '100%',
  },
  errorStyle: {
    fontSize: 25,
    marginBottom: 15,
  },
};

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    email: selector(state, EMAIL_INPUT_NAME),
    password: selector(state, PASSWORD_INPUT_NAME),
    authError: auth.authError,
    loading: auth.loading,
    shouldOpenErrorToast: auth.shouldOpenErrorToast,
  };
};

const selector = formValueSelector(FORM_NAME);
LoginForm = reduxForm({
  form: FORM_NAME,
})(LoginForm);

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
  didShowErrorToastAction: didShowErrorToast,
})(LoginForm);
