// @flow
/* eslint-disable */
import React, { Component } from 'react';

import {
  Platform,
  Animated,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  StyleSheet, Text,
} from 'react-native';

import _ from 'lodash';
import { connectStyle } from 'native-base-shoutem-theme';
import { Button } from 'native-base';
const AnimatedFab = Animated.createAnimatedComponent(Button);

// Basically a pure copy of native base's fab with minor alterations, but
// implemented here as I could not figure out how to  to extend their "Styled" class
class CustomFab extends Component<Props> {
  props: Animated.props & {
    pos?: string;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };

  state: {
    buttons: any,
    active: boolean
  };

  constructor(props) {
    super(props);
    this.containerHeight = new Animated.Value(56);
    this.containerWidth = new Animated.Value(0);
    this.buttonScale = new Animated.Value(0);
    this.state = {
      buttons: undefined,
      active: false,
    };
  }

  fabTopValue(pos) {
    if (pos === 'topLeft') {
      return {
        top: 20,
        bottom: undefined,
        left: 20,
        right: undefined,
      };
    } if (pos === 'bottomRight') {
      return {
        top: undefined,
        bottom: 20,
        left: undefined,
        right: 20,
      };
    } if (pos === 'bottomLeft') {
      return {
        top: undefined,
        bottom: 20,
        left: 20,
        right: undefined,
      };
    } if (pos === 'topRight') {
      return {
        top: 20,
        bottom: undefined,
        left: undefined,
        right: 20,
      };
    }
  }

  fabOtherBtns(direction, i) {
    if (direction === 'up') {
      return {
        top: undefined,
        bottom:
          this.props.active === false
            ? Platform.OS === 'ios' ? 50 : 5
            : i * 50 + 65,
        left: 8,
        right: 0,
      };
    } if (direction === 'left') {
      return {
        top: 8,
        bottom: 0,
        left:
          this.props.active === false
            ? Platform.OS === 'ios' ? 8 : 8
            : -(i * 50 + 58),
        right: 0,
      };
    } if (direction === 'down') {
      return {
        top:
          this.props.active === false
            ? Platform.OS === 'ios' ? 50 : 8
            : i * 50 + 73,
        bottom: 0,
        left: 8,
        right: 0,
      };
    } if (direction === 'right') {
      return {
        top: 8,
        bottom: 0,
        left:
          this.props.active === false
            ? Platform.OS === 'ios' ? 50 : 8
            : i * 50 + 73,
        right: 0,
      };
    }
  }

  getInitialStyle(iconStyle) {
    return {
      fab: {
        height: 56,
        width: 56,
        borderRadius: 28,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 2,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'blue',
      },
      container: {
        position: 'absolute',
        top: this.props.position
          ? this.fabTopValue(this.props.position).top
          : undefined,
        bottom: this.props.position
          ? this.fabTopValue(this.props.position).bottom
          : 20,
        right: this.props.position
          ? this.fabTopValue(this.props.position).right
          : 20,
        left: this.props.position
          ? this.fabTopValue(this.props.position).left
          : undefined,
        width: 56,
        height: this.containerHeight,
        flexDirection: this.props.direction
          ? this.props.direction === 'left' || this.props.direction === 'right'
            ? 'row'
            : 'column'
          : 'column',
        alignItems: 'center',
      },
      iconStyle: {
        color: '#fff',
        fontSize: 24,
        lineHeight: Platform.OS == 'ios' ? 27 : undefined,
        ...iconStyle,
      },
      buttonStyle: {
        position: 'absolute',
        height: 40,
        width: 40,
        left: 7,
        borderRadius: 20,
        transform: this.state.active
          ? [{ scale: new Animated.Value(1) }]
          : [{ scale: this.buttonScale }],
        marginBottom: 10,
        backgroundColor: 'transparent',
      },
    };
  }

  getContainerStyle() {
    return _.merge(this.getInitialStyle().container, this.props.containerStyle);
  }

  prepareFabProps() {
    const defaultProps = {
      style: this.getInitialStyle().fab,
    };
    const incomingProps = _.clone(this.props);
    delete incomingProps.onPress;
    return computeProps(incomingProps, defaultProps);
  }

  getOtherButtonStyle(child, i) {
    const type = {
      top: this.props.direction
        ? this.fabOtherBtns(this.props.direction, i).top
        : undefined,
      left: this.props.direction
        ? this.fabOtherBtns(this.props.direction, i).left
        : 8,
      right: this.props.direction
        ? this.fabOtherBtns(this.props.direction, i).right
        : 0,
      bottom: this.props.direction
        ? this.fabOtherBtns(this.props.direction, i).bottom
        : this.props.active === false
          ? Platform.OS === 'ios' ? 8 : 8
          : i * 50 + 50,
    };

    return _.merge(this.getInitialStyle().buttonStyle, StyleSheet.flatten(child.props.style), type);
  }

  prepareButtonProps(child) {
    const inp = _.clone(child.props);
    delete inp.style;

    const defaultProps = {};

    return computeProps(inp, defaultProps);
  }

  componentDidMount() {
    const icon = [];

    this.setState({
      buttons: icon.length,
    });
    this.activeTimer = setTimeout(() => {
      this.setState({
        active: this.props.active,
      });
    }, 0);
  }

  componentWillUnmount() {
    if (this.activeTimer) {
      clearTimeout(this.activeTimer);
    }
  }

  renderFab() {
    const childrenArray = React.Children.toArray(this.props.children);
    return React.cloneElement(childrenArray[0], {
      style: this.getInitialStyle(childrenArray[0].props.style).iconStyle,
    });
  }

  renderButtons() {
    const childrenArray = React.Children.toArray(this.props.children);

    const newChildren = [];

    // No longer rendering child.props.children, instead rendering child
    {
      childrenArray.slice(1).map((child, i) => {
        newChildren.push(
          <AnimatedFab
            style={this.getOtherButtonStyle(child, i)}
            {...this.prepareButtonProps(child, i)}
            fabButton
            key={i}
          >
            {child}
          </AnimatedFab>,
        );
      });
    }
    return newChildren;
  }

  upAnimate() {
    if (!this.props.active) {
      Animated.spring(this.containerHeight, {
        toValue: this.state.buttons * 51.3 + 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1,
      }).start();
    } else {
      this.setState({
        active: false,
      });
      Animated.spring(this.containerHeight, {
        toValue: 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0,
      }).start();
    }
  }

  leftAnimate() {
    if (!this.props.active) {
      Animated.spring(this.containerWidth, {
        toValue: this.state.buttons * 51.3 + 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1,
      }).start();
    } else {
      this.setState({
        active: false,
      });
      Animated.spring(this.containerHeight, {
        toValue: 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0,
      }).start();
    }
  }

  rightAnimate() {
    if (!this.props.active) {
      Animated.spring(this.containerWidth, {
        toValue: this.state.buttons * 51.3 + 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1,
      }).start();
    } else {
      this.setState({
        active: false,
      });
      Animated.spring(this.containerHeight, {
        toValue: 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0,
      }).start();
    }
  }

  downAnimate() {
    if (!this.props.active) {
      Animated.spring(this.containerHeight, {
        toValue: 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 1,
      }).start();
    } else {
      this.setState({
        active: false,
      });
      Animated.spring(this.containerHeight, {
        toValue: 56,
      }).start();
      Animated.spring(this.buttonScale, {
        toValue: 0,
      }).start();
    }
  }

  _animate() {
    const { props: { direction, position } } = this;
    if (this.props.direction) {
      if (this.props.direction === 'up') {
        this.upAnimate();
      } else if (this.props.direction === 'left') {
        this.leftAnimate();
      } else if (this.props.direction === 'right') {
        this.rightAnimate();
      } else if (this.props.direction === 'down') {
        this.downAnimate();
      }
    } else {
      this.upAnimate();
    }
  }

  fabOnPress() {
    if (this.props.onPress) {
      this.props.onPress();
      this._animate();
      this.activeTimer = setTimeout(() => {
        this.setState({
          active: this.props.active,
        });
      }, 100);
    }
  }

  render() {
    const { props: { active } } = this;
    return (
      <Animated.View style={this.getContainerStyle()}>
        {this.renderButtons()}
        {Platform.OS === 'ios'
        || variables.androidRipple === false
        || Platform.Version <= 21 ? (
          <TouchableOpacity
              onPress={() => this.fabOnPress()}
              {...this.prepareFabProps()}
              activeOpacity={1}
            >
              {this.renderFab()}
            </TouchableOpacity>
          ) : (
            <TouchableNativeFeedback
              onPress={() => this.fabOnPress()}
              background={TouchableNativeFeedback.Ripple(variables.androidRippleColor, false)}
              {...this.prepareFabProps()}
            >
              <View style={[this.getInitialStyle().fab, this.props.style]}>
                {this.renderFab()}
              </View>
            </TouchableNativeFeedback>
          )}
      </Animated.View>
    );
  }
}

// Also from native base
const computeProps = (incomingProps, defaultProps) => {
  // External props has a higher precedence
  let computedProps = {};

  incomingProps = _.clone(incomingProps);
  delete incomingProps.children;

  const incomingPropsStyle = incomingProps.style;
  delete incomingProps.style;

  if (incomingProps) {
    _.assign(computedProps, defaultProps, incomingProps);
  } else {
    computedProps = defaultProps;
  }
  // Pass the merged Style Object instead
  if (incomingPropsStyle) {
    let computedPropsStyle = {};
    computedProps.style = {};
    if (Array.isArray(incomingPropsStyle)) {
      _.forEach(incomingPropsStyle, style => {
        if (typeof style === "number") {
          _.merge(computedPropsStyle, StyleSheet.flatten(style));
        } else {
          _.merge(computedPropsStyle, style);
        }
      });
    } else if (typeof incomingPropsStyle === "number") {
      computedPropsStyle = StyleSheet.flatten(incomingPropsStyle);
    } else {
      computedPropsStyle = incomingPropsStyle;
    }

    _.merge(computedProps.style, defaultProps.style, computedPropsStyle);
  }
  return computedProps;
};

const mapPropsToStyleNames = (styleNames, props) => {
  const keys = _.keys(props);
  const values = _.values(props);

  _.forEach(keys, (key, index) => {
    if (values[index]) {
      styleNames.push(key);
    }
  });

  return styleNames;
};

const StyledFab = connectStyle("NativeBase.Fab", {}, mapPropsToStyleNames)(CustomFab);
export { StyledFab as CustomFab };
