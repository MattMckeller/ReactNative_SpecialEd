// @flow
import React from 'react';
import { ScrollView, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import LoginForm from '../components/forms/LoginForm';
import AuthLayout from '../components/containers/layouts/AuthLayout';
import RoundedOutlineButton from '../components/shared/common/RoundedOutlineButton';
import { RouterHelpers } from '../router-helpers';
import CenteredWrapper from '../components/containers/CenteredWrapper';

type Props = NavigationScreenProps & {}

const LoginScene = (props: Props) => {
  const navigateToCreateAccountScene = () => {
    const { navigation } = props;
    console.log('redirect create account');
    navigation.navigate(RouterHelpers.createAccount);
  };

  const navigateToForgotPasswordScene = () => {
    const { navigation } = props;
    console.log('redirect forgot password');
    navigation.navigate(RouterHelpers.forgotPassword);
  };

  return (
    <AuthLayout>
      <CenteredWrapper>
        <ScrollView contentContainerStyle={{ flex: 1 }}/>
        <LoginForm/>
        <View style={{ marginTop: 35 }}>
          <RoundedOutlineButton
            label="Create Account"
            height={60}
            onPress={navigateToCreateAccountScene}
          />
        </View>
        <View style={{ marginTop: 35 }}>
          <RoundedOutlineButton
            label="Forgot Password"
            height={60}
            onPress={navigateToForgotPasswordScene}
          />
        </View>
        <ScrollView contentContainerStyle={{ flex: 1 }}/>
      </CenteredWrapper>
    </AuthLayout>
  );
};

export default LoginScene;
