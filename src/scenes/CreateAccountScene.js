// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ScrollView, View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import AuthLayout from '../layouts/AuthLayout';
import CreateAccountForm from '../components/forms/CreateAccountForm';
import globalStyles from '../assets/styles/GlobalStyles';
import styleVariables from '../assets/StyleVariables';
import RoundedButtonOutline from '../components/shared/common/RoundedOutlineButton';

type Props = {
}
class CreateAccountScene extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    const { flexColumn } = globalStyles;
    const { containerStyle } = styles;
    return (
      <AuthLayout>
        <View style={{ ...containerStyle, ...flexColumn }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '95%', height: '100%', justifyContent: 'center' }}>
              <ScrollView contentContainerStyle={{ flex: 1 }} />
              <CreateAccountForm />
              <View style={{ marginTop: 35 }}>
                <RoundedButtonOutline
                  label="Back to login"
                  onPress={CreateAccountScene.navigateToLoginScene}
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
    console.log('redirect login');
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
})(CreateAccountScene);
