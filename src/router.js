import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginScene from "./scenes/LoginScene";

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene key="Auth" hideNavBar>
        <Scene key="login" component={LoginScene} title="Please Login" initial hideNavBar>
        </Scene>
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
