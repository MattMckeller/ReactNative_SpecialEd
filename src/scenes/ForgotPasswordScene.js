// @flow
import React from 'react';
import { ScrollView, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import AuthLayout from '../components/containers/layouts/AuthLayout';
import RoundedOutlineButton from '../components/shared/common/RoundedOutlineButton';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';
import { RouterHelpers } from '../navigation/router-helpers';
import CenteredWrapper from '../components/containers/layouts/wrappers/CenteredWrapper';

type Props = NavigationScreenProps & {}

const ForgotPasswordScene = (props: Props) => {
  const navigateToLoginScene = () => {
    console.log('redirect login');
    const { navigation } = props;
    navigation.navigate(RouterHelpers.login);
  };
  return (
    <AuthLayout>
      <CenteredWrapper>
        <ScrollView contentContainerStyle={{ flex: 1 }}/>
        <ForgotPasswordForm/>
        <View style={{ marginTop: 35 }}>
          <RoundedOutlineButton
            label="Back to login"
            onPress={navigateToLoginScene}
            textColor="black"
            height={60}
          />
        </View>
        <ScrollView contentContainerStyle={{ flex: 1 }}/>
      </CenteredWrapper>
    </AuthLayout>
  );
};

export default ForgotPasswordScene;
