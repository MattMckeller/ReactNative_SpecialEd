// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Text, TouchableHighlight, View,
} from 'react-native';
import styleVariables from '../../assets/StyleVariables';

type Props = {
  title: string,
  height?: number | string,
  onPress: () => {},
}
class RoundedButton extends Component<Props> {
  constructor() {
    super();
    this._onPress = this._onPress.bind(this);
  }

  render() {
    const { buttonContainerStyle, textStyle, touchableHighlightStyle } = styles;
    const { title, height } = this.props;
    return (
      <TouchableHighlight
        onPress={this._onPress}
        style={touchableHighlightStyle}
      >
        <View style={{ ...buttonContainerStyle, ...{ height } }}>
          <Text style={textStyle}>{title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _onPress() {
    const { onPress } = this.props;
    onPress();
  }
}

RoundedButton.defaultProps = {
  height: 50,
};

const styles = {
  touchableHighlightStyle: {
    borderRadius: 25,
  },
  buttonContainerStyle: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: styleVariables.primaryColor,
    fontWeight: 'bold',
    fontSize: 20,
  },
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(RoundedButton);
