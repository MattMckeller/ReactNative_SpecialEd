/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import globalStyles from '../../../assets/styles/GlobalStyles';
import MainFab from '../../buttons/MainFab';

type Props = {
  children: any,
  footer?: React.Element,
  contentContainerStyle?: {},
  fabContainerStyle?: {},
  footerContainerStyle?: {},
  includeFooterMargin?: boolean,
};

class MainLayout extends Component<Props> {
  state = {
    footerHeight: 0,
  };

  constructor() {
    super();
    this.onFooterLayout = this.onFooterLayout.bind(this);
  }

  onFooterLayout(event: LayoutChangeEvent) {
    const { height } = event.nativeEvent.layout;
    this.setState({ footerHeight: height });
  }

  renderFooter() {
    const { footer, footerContainerStyle } = this.props;
    return (footer) ? (
      <View
        onLayout={this.onFooterLayout}
        style={footerContainerStyle}
      >
        {footer}
      </View>
    ) : null;
  }

  render() {
    const {
      children,
      fabContainerStyle,
      includeFooterMargin,
    } = this.props;
    const { footerHeight } = this.state;
    let { contentContainerStyle } = this.props;
    contentContainerStyle = (includeFooterMargin)
      ? { ...contentContainerStyle, marginBottom: footerHeight }
      : contentContainerStyle;

    const { flexRow, flexColumn } = globalStyles;
    return (
      <View style={{ ...flexColumn, borderWidth: 0 }}>
        <View style={flexRow}>
          <View style={contentContainerStyle}>
            {children}
          </View>
          {this.renderFooter()}
          <View style={fabContainerStyle}>
            <MainFab/>
          </View>
        </View>
      </View>
    );
  }
}

MainLayout.defaultProps = {
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  footerContainerStyle: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  fabContainerStyle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  footer: null,
  includeFooterMargin: true,
};

export default MainLayout;
