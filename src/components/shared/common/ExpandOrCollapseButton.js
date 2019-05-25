// @flow
import React, { Component } from 'react';
import { Animated, TouchableWithoutFeedback, View } from 'react-native';
import CollapseIcon from '../icons/CollapseIcon';
import ExpandIcon from '../icons/ExpandIcon';

type Props = {
  onPress: () => any;
  isExpanded: boolean;
  width?: number | string;
  height?: number | string;
}

class ExpandOrCollapseButton extends Component<Props> {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  constructor() {
    super();
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { fadeAnim } = this.state;
    const { onPress } = this.props;
    console.log('begin animation');
    Animated.sequence([
      Animated.timing(
        fadeAnim,
        {
          toValue: 0.5,
          duration: 100,
        },
      ),
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 100,
        },
      ),
    ]).start();

    onPress();
  }

  render() {
    const { isExpanded, width, height } = this.props;
    const { fadeAnim } = this.state;
    const {
      containerStyle,
      iconContainerStyle,
      animatedViewStyle,
      animatedViewContainerStyle,
    } = styles;
    return (
      <TouchableWithoutFeedback // todo extract clicking/animating to its own component
        onPress={this.onPress}
      >
        <View style={{ width, height, ...containerStyle }}>
          <View style={iconContainerStyle}>
            {isExpanded
              ? (
                <CollapseIcon/>
              )
              : (
                <ExpandIcon/>
              )
            }
          </View>
          <View style={animatedViewContainerStyle}>
            <Animated.View
              style={{ ...animatedViewStyle, opacity: fadeAnim }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f955',
  },
  animatedViewContainerStyle: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedViewStyle: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: 'gray',
  },
  iconContainerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

ExpandOrCollapseButton.defaultProps = {
  width: 100,
  height: 50,
};

export default ExpandOrCollapseButton;
