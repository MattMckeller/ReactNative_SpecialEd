// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, KeyboardAvoidingView, Keyboard,
} from 'react-native';
import {
  Field, FormProps, reduxForm, formValueSelector,
} from 'redux-form';
import globalStyles from '../../assets/styles/GlobalStyles';
import RoundedTextInput from '../common/RoundedTextInput';
import RoundedButton from '../common/RoundedButton';
import styleVariables from '../../assets/StyleVariables';
import CenteredSpinner from '../common/CenteredSpinner';
import Required from '../../utility/validation/Required';
import MinLength from '../../utility/validation/MinLength';
import Validate from '../../utility/validation/Validate';
import autoFormErrorDisplay from '../hoc/AutoFormErrorDisplay';
import SubmitButtonHelper from "../../utility/helpers/SubmitButtonHelper";
import type {SubmitButtonErrorDisplayData} from "../../utility/helpers/SubmitButtonHelper";
import {Toast} from "native-base";
import {createAccount} from "../../actions/CreateAccountActions";

const FORM_NAME = 'createAccountForm';
const EMAIL_INPUT_NAME = 'email';
const PASSWORD_INPUT_NAME = 'password';
const PASSWORD_CONFIRMATION_INPUT_NAME = 'passwordConfirmation';
const ORGANIZATION_INPUT_NAME = 'organization';
const InputComponent = autoFormErrorDisplay(RoundedTextInput);

type Props = {
  loginUserAction: ({email: string, password: string, organization: string}) => {},
  email: string,
  password: string,
  organization: string,
  loading: boolean,
  shouldOpenErrorToast: boolean,
} & FormProps
class CreateAccountForm extends Component<Props> {
  state = {
    shouldDisableSubmitButton: false,
    forceDisplayErrorMessages: false,
  };

  submitButtonHelper: SubmitButtonHelper = new SubmitButtonHelper(
    [
      EMAIL_INPUT_NAME,
      PASSWORD_INPUT_NAME,
      PASSWORD_CONFIRMATION_INPUT_NAME,
      ORGANIZATION_INPUT_NAME,
    ],
  );

  // todo update validation rules
  emailValidationRules = [
    value => Validate(value, [
      Required({ fieldName: 'Email Address' }),
    ]),
  ];

  // todo update validation rules
  passwordValidationRules = [
    value => Validate(value, [
      Required({ fieldName: 'Password' }),
      MinLength({ fieldName: 'Password', length: 8 }),
    ]),
  ];

  // todo !!important!! implement confirm password match validation
  passwordConfirmationValidationRules = [
    value => Validate(value, [
      Required({ fieldName: 'Password Confirmation' }),
    ]),
  ];

  organizationValidationRules = [
    value => Validate(value, [
      Required({ fieldName: 'Organization' }),
    ]),
  ];

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.checkSubmitButtonStatus = this.checkSubmitButtonStatus.bind(this);
    this.onSubmitErrorChecker = this.onSubmitErrorChecker.bind(this);
    this.onErrorStateChange = this.onErrorStateChange.bind(this);
    this.showErrorToast = this.showErrorToast.bind(this);
  }

  componentDidUpdate(): void {
    const { shouldOpenErrorToast } = this.props;
    if (shouldOpenErrorToast === true) {
      this.showErrorToast();
    }
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

  // todo populate email from username section of login page
  render() {
    // todo see if any of these can be moved to a centralized styles file
    const {
      wrapperStyle,
      containerStyle,
      inputContainerStyle,
      submitButtonContainerStyle,
    } = styles;
    const { flexColumn } = globalStyles;
    const { forceDisplayErrorMessages, shouldDisableSubmitButton } = this.state;
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ ...flexColumn, ...containerStyle }}>
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
            <View style={inputContainerStyle}>
              <Field
                name={PASSWORD_CONFIRMATION_INPUT_NAME}
                onErrorStateChange={this.onErrorStateChange}
                label="Confirm Password"
                labelIcon="lock"
                iconType="MaterialIcons"
                secureTextEntry
                component={InputComponent}
                validate={this.passwordConfirmationValidationRules}
                forceDisplayErrorMessage={forceDisplayErrorMessages}
              />
            </View>
            <View style={inputContainerStyle}>
              <Field
                name={ORGANIZATION_INPUT_NAME}
                onErrorStateChange={this.onErrorStateChange}
                label="Organization"
                labelIcon="building"
                iconType="FontAwesome5"
                secureTextEntry
                component={InputComponent}
                validate={this.organizationValidationRules}
                forceDisplayErrorMessage={forceDisplayErrorMessages}
              />
            </View>
            <View style={submitButtonContainerStyle}>
              <RoundedButton
                onPress={this.onSubmitChecker}
                disabled={shouldDisableSubmitButton}
                label="Create Account"
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
      email, password, organization, valid, createAcountAction,
    } = this.props;
    Keyboard.dismiss();
    if (valid) {
      createAcountAction({ email, password, organization });
    }
  }
}

const styles = {
  containerStyle: {
    backgroundColor: styleVariables.primaryColor,
  },
  wrapperStyle: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerStyle: {
    width: '100%',
    marginBottom: 20,
  },
  submitButtonContainerStyle: {
    marginTop: 15,
    width: '100%',
  },
};

const selector = formValueSelector(FORM_NAME);
const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    email: selector(state, EMAIL_INPUT_NAME),
    password: selector(state, PASSWORD_INPUT_NAME),
    organization: selector(state, ORGANIZATION_INPUT_NAME),
    error: auth.error,
    loading: auth.loading,
  };
};

CreateAccountForm = reduxForm({
  form: FORM_NAME,
})(CreateAccountForm);

export default connect(mapStateToProps, {
  createAccountAction: createAccount
})(CreateAccountForm);
