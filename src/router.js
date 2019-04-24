import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScene from './scenes/LoginScene';
import CreateAccountScene from './scenes/CreateAccountScene';
import ForgotPasswordScene from './scenes/ForgotPasswordScene';

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene key="Auth" hideNavBar>
        <Scene key="login" component={LoginScene} title="Please Login" initial hideNavBar />
        <Scene key="createAccount" component={CreateAccountScene} title="Create Account" hideNavBar />
        <Scene key="forgotPassword" component={ForgotPasswordScene} title="Forgot Password" hideNavBar />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
