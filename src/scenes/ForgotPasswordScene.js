// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView, View } from 'react-native';
import AuthLayout from '../components/containers/layouts/AuthLayout';
import RoundedButtonOutline from '../components/shared/common/RoundedOutlineButton';
import globalStyles from '../assets/styles/GlobalStyles';
import styleVariables from '../assets/StyleVariables';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';

type Props = {
}
class ForgotPasswordScene extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    const { flexColumn } = globalStyles;
    const { containerStyle } = styles;
    // todo move background here
    return (
      <AuthLayout>
        { /* Todo move these nested views into a component */ }
        <View style={{ ...containerStyle, ...flexColumn }}>
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '95%', height: '100%', justifyContent: 'center' }}>
              <ScrollView contentContainerStyle={{ flex: 1 }} />
              <ForgotPasswordForm />
              <View style={{ marginTop: 35 }}>
                <RoundedButtonOutline
                  label="Back to login"
                  onPress={ForgotPasswordScene.navigateToLoginScene}
                  textColor="black"
                  height={60}
                />
              </View>
              <ScrollView contentContainerStyle={{ flex: 1 }} />
            </View>
          </View>
        </View>
      </AuthLayout>
    );
  }

  static navigateToLoginScene() {
    console.log('redirect create account');
    Actions.login();
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
})(ForgotPasswordScene);
