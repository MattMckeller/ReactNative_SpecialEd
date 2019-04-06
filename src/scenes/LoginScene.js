// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import MainLayout from '../layouts/MainLayout';

type Props = {
}
class LoginScene extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    return (
      <MainLayout>
        <LoginForm />
      </MainLayout>
    );
  }
}

const styles = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(LoginScene);
