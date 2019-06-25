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
import RoundedTextInput from '../shared/common/RoundedTextInput';
import RoundedButton from '../shared/common/RoundedButton';
import CenteredSpinner from '../shared/common/CenteredSpinner';
import Required from '../../utility/validation/Required';
import MinLength from '../../utility/validation/MinLength';
import Validate from '../../utility/validation/Validate';
import autoFormErrorDisplay from './hoc/AutoFormErrorDisplay';
import SubmitButtonHelper from '../../utility/helpers/SubmitButtonHelper';
import type { SubmitButtonErrorDisplayData } from '../../utility/helpers/SubmitButtonHelper';
import styleVariables from '../../assets/StyleVariables';
import {
  didShowForgotPasswordToast,
  forgotPassword,
} from '../../redux/actions/ForgotPasswordActions';

const FORM_NAME = 'forgotPasswordForm';
const EMAIL_INPUT_NAME = 'email';
const InputComponent = autoFormErrorDisplay(RoundedTextInput);

type Props = {
  forgotPasswordAction: ({ email: string, password: string }) => void,
  didShowErrorToastAction: () => void,
  email: string,
  loading: boolean,
  error: string,
  shouldOpenErrorToast: boolean,
} & FormProps

class ForgotPasswordForm extends Component<Props> {
  state = {
    disableSubmitButton: false,
    forceErrorDisplays: false,
  };

  submitButtonHelper: SubmitButtonHelper = new SubmitButtonHelper(
    [EMAIL_INPUT_NAME],
  );

  // todo remove validation rules definitions from this component

  // todo update validation rules
  emailValidationRules = [
    value => Validate(value, [
      Required({ fieldName: 'Email Address' }),
      MinLength({ fieldName: 'Email Address', length: 5 }),
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

  componentDidUpdate(prevProps: Props): void {
    const { shouldOpenErrorToast, loading } = this.props;
    if (shouldOpenErrorToast === true) {
      this.showErrorToast();
    }
    if (loading !== prevProps.loading) {
      this.checkSubmitButtonStatus();
    }
  }

  // todo move loading to spinner component
  renderSpinner() {
    const { loading } = this.props;
    if (loading === true) {
      return (
        <CenteredSpinner/>
      );
    }
    return null;
  }

  showErrorToast() {
    const { errorMessage, didShowErrorToastAction } = this.props;
    Toast.show({
      text: errorMessage,
      buttonText: 'Okay',
      duration: 10000,
      type: 'danger',
      style: {
        backgroundColor: styleVariables.errorColor,
      },
    });
    didShowErrorToastAction();
  }

  // todo disable create account button while loading
  render() {
    const {
      wrapperStyle,
      inputContainerStyle,
      submitButtonContainerStyle,
    } = styles;
    const { flexColumn } = globalStyles;
    const { disableSubmitButton, forceErrorDisplays } = this.state;
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
                forceErrorDisplay={forceErrorDisplays}
              />
            </View>
            <View style={submitButtonContainerStyle}>
              <RoundedButton
                onPress={this.onSubmitErrorChecker}
                disabled={disableSubmitButton}
                label="Send Pin"
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
    const { disableSubmitButton: currentStatus, forceErrorDisplays } = this.state;
    const disableSubmitButton = this.submitButtonHelper.shouldDisableSubmitButton()
      || loading || (forceErrorDisplays && !valid);
    if (disableSubmitButton !== currentStatus) {
      this.setState({ disableSubmitButton });
    }
  }

  onSubmitErrorChecker() {
    const { valid } = this.props;
    if (!valid) {
      this.setState({ forceErrorDisplays: true });
    } else {
      this.onSubmit();
    }
  }

  onSubmit() {
    const {
      email, valid, forgotPasswordAction,
    } = this.props;
    Keyboard.dismiss();
    if (valid) {
      forgotPasswordAction({ email });
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

const selector = formValueSelector(FORM_NAME);
const mapStateToProps = (state) => {
  const { forgotPassword: forgotPasswordState } = state;
  console.log('mapStateToProps', state);
  console.log('forgotPasswordState', forgotPasswordState);
  console.log('forgotPasswordState', forgotPasswordState.error);
  return {
    email: selector(state, EMAIL_INPUT_NAME),
    errorMessage: forgotPasswordState.error,
    loading: forgotPasswordState.loading,
    shouldOpenErrorToast: forgotPasswordState.shouldOpenErrorToast,
  };
};

ForgotPasswordForm = reduxForm({
  form: FORM_NAME,
})(ForgotPasswordForm);

export default connect(mapStateToProps, {
  forgotPasswordAction: forgotPassword,
  didShowErrorToastAction: didShowForgotPasswordToast, // todo change this and create it
})(ForgotPasswordForm);
