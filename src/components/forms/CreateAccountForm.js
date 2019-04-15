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
} & FormProps
class CreateAccountForm extends Component<Props> {
  state = {};

  submitButtonHelper: SubmitButtonHelper = new SubmitButtonHelper(
    [
      EMAIL_INPUT_NAME,
      PASSWORD_INPUT_NAME,
      PASSWORD_CONFIRMATION_INPUT_NAME,
      ORGANIZATION_INPUT_NAME
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

  render() {
    // todo see if any of these can be moved to a centralized styles file
    const {
      wrapperStyle,
      containerStyle,
      inputContainerStyle,
      submitButtonContainerStyle,
    } = styles;
    const { flexColumn } = globalStyles;
    const {
      handleSubmit,
      submitting,
    } = this.props;
    const shouldDisableSubmitButton = this.submitButtonHelper.shouldDisableSubmitButton()
      || submitting;
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ ...flexColumn, ...containerStyle }}>
          <KeyboardAvoidingView behavior="padding" style={wrapperStyle}>
            <View style={inputContainerStyle}>
              <Field
                name={EMAIL_INPUT_NAME}
                onErrorStateChange={this.submitButtonHelper.onErrorStateChange}
                label="Email Address"
                component={InputComponent}
                labelIcon="person"
                iconType="MaterialIcons"
                validate={this.emailValidationRules}
              />
            </View>
            <View style={inputContainerStyle}>
              <Field
                name={PASSWORD_INPUT_NAME}
                onErrorStateChange={this.submitButtonHelper.onErrorStateChange}
                label="Password"
                labelIcon="lock"
                iconType="MaterialIcons"
                secureTextEntry
                component={InputComponent}
                validate={this.passwordValidationRules}
              />
            </View>
            <View style={inputContainerStyle}>
              <Field
                name={PASSWORD_CONFIRMATION_INPUT_NAME}
                onErrorStateChange={this.submitButtonHelper.onErrorStateChange}
                label="Confirm Password"
                labelIcon="lock"
                iconType="MaterialIcons"
                secureTextEntry
                component={InputComponent}
                validate={this.passwordConfirmationValidationRules}
              />
            </View>
            <View style={inputContainerStyle}>
              <Field
                name={ORGANIZATION_INPUT_NAME}
                onErrorStateChange={this.submitButtonHelper.onErrorStateChange}
                label="Organization"
                labelIcon="building"
                iconType="FontAwesome5"
                secureTextEntry
                component={InputComponent}
                validate={this.organizationValidationRules}
              />
            </View>
            <View style={submitButtonContainerStyle}>
              <RoundedButton
                onPress={handleSubmit(this.onSubmit)}
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

  // todo move to centralized location somehow
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

  // todo move to generic location
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
CreateAccountForm = reduxForm({
  form: FORM_NAME,
})(CreateAccountForm);

export default connect(mapStateToProps, {
  // createAccountAction: createAccount, todo create action
})(CreateAccountForm);
