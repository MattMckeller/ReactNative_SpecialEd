// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import styleVariables from '../../assets/StyleVariables';

type Props = {
}
class CenteredSpinner extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <ActivityIndicator
          size="large"
          color={styleVariables.spinnerColor}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(CenteredSpinner);
