// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';
import styleVariables from '../assets/StyleVariables';
import MainLayout from '../layouts/MainLayout';

type Props = {
}
class StudentListScene extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    return (
    );
  }
}

const styles = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(StudentListScene);
