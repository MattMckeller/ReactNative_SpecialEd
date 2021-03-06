// @flow
import React from 'react';
import { ScrollView, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import AuthLayout from '../components/containers/layouts/AuthLayout';
import CreateAccountForm from '../components/forms/CreateAccountForm';
import RoundedOutlineButton from '../components/shared/common/RoundedOutlineButton';
import { RouterHelpers } from '../navigation/router-helpers';
import CenteredWrapper from '../components/containers/layouts/wrappers/CenteredWrapper';

type Props = NavigationScreenProps & {
}
const CreateAccountScene = (props: Props) => {
  const navigateToLoginScene = () => {
    console.log('redirect login');
    const { navigation } = props;
    navigation.navigate(RouterHelpers.login);
  };
  return (
    <AuthLayout>
      <CenteredWrapper>
        <ScrollView contentContainerStyle={{ flex: 1 }} />
        <CreateAccountForm />
        <View style={{ marginTop: 35 }}>
          <RoundedOutlineButton
            label="Back to login"
            onPress={navigateToLoginScene}
            textColor="black"
            height={60}
          />
        </View>
        <ScrollView contentContainerStyle={{ flex: 1 }} />
      </CenteredWrapper>
    </AuthLayout>
  );
};

export default CreateAccountScene;
