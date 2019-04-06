// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import AuthLayout from "../layouts/AuthLayout";
import {View} from "react-native";

type Props = {
}
class LoginScene extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    return (
      <AuthLayout>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <LoginForm />
        </View>
      </AuthLayout>
    );
  }
}

const styles = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(LoginScene);
