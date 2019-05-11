// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView, View } from 'react-native';
import LoginForm from '../components/forms/LoginForm';
import AuthLayout from '../layouts/AuthLayout';
import RoundedButtonOutline from '../components/shared/common/RoundedOutlineButton';
import globalStyles from '../assets/styles/GlobalStyles';
import styleVariables from '../assets/StyleVariables';

type Props = {
}
class LoginScene extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    const { flexColumn } = globalStyles;
    const { containerStyle } = styles;
    // todo move background here
    return (
      <AuthLayout>
        <View style={{ ...containerStyle, ...flexColumn }}>
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '95%', height: '100%', justifyContent: 'center' }}>
              <ScrollView contentContainerStyle={{ flex: 1 }} />
              <LoginForm />
              <View style={{ marginTop: 35 }}>
                <RoundedButtonOutline
                  label="Create Account"
                  height={60}
                  onPress={LoginScene.navigateToCreateAccountScene}
                />
              </View>
              <View style={{ marginTop: 35 }}>
                <RoundedButtonOutline
                  label="Forgot Password"
                  height={60}
                  onPress={LoginScene.navigateToForgotPasswordScene}
                />
              </View>
              <ScrollView contentContainerStyle={{ flex: 1 }} />
            </View>
          </View>
        </View>
      </AuthLayout>
    );
  }

  static navigateToCreateAccountScene() {
    console.log('redirect create account');
    Actions.createAccount();
  }

  static navigateToForgotPasswordScene() {
    console.log('redirect forgot password');
    Actions.forgotPassword();
  }
}

const styles = {
  containerStyle: {
    backgroundColor: styleVariables.primaryColor,
    height: '100%',
  },
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(LoginScene);
