// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

type Props = {
  children: React.ReactNode,
  showing: boolean,
}

class Template extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    const { children } = this.props;
    console.log({ children });
    return (
      <View
        style={{ height: '100%', width: '100%', position: 'absolute', backgroundColor: 'yellow' }}>
        {children}
      </View>
    );
  }
}

const styles = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Template);
