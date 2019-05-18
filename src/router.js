import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScene from './scenes/LoginScene';
import CreateAccountScene from './scenes/CreateAccountScene';
import ForgotPasswordScene from './scenes/ForgotPasswordScene';
import StudentListScene from './scenes/StudentListScene';
import StudentProfileNotesScene from './scenes/StudentProfileNotesScene';

const RouterComponent = () => (
  <Router>
    <Scene key="root">
      <Scene key="Auth" hideNavBar>
        <Scene key="login" component={LoginScene} title="Please Login" initial />
        <Scene key="createAccount" component={CreateAccountScene} title="Create Account" hideNavBar />
        <Scene key="forgotPassword" component={ForgotPasswordScene} title="Forgot Password" hideNavBar />
        <Scene key="studentList" component={StudentListScene} title="Student List" hideNavBar initial />
        <Scene key="studentProfileNotes" component={StudentProfileNotesScene} title="Student Profile" hideNavBar />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
