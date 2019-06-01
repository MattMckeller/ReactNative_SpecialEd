/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Container, Content,
} from 'native-base';
import globalStyles from '../../../assets/styles/GlobalStyles';
import MainFab from '../../buttons/MainFab';
import CenteredSpinner from '../../shared/common/CenteredSpinner';
import DefaultHeader from './headers/DefaultHeader';
import DefaultFooter from './footers/DefaultFooter';

type Props = {
  children: any,
  header?: React.Element,
  footer?: React.Element,
  loading?: boolean,
  contentContainerStyle?: {},
};

class MainLayout extends Component<Props> {
  render() {
    const {
      children,
      contentContainerStyle,
      header,
      footer,
    } = this.props;
    const {
      nbContainerStyle,
      fabContainer,
    } = styles;

    console.log('main layout');
    console.log({ footer, header });
    const { flexRow, flexColumn } = globalStyles;
    return (
      <View style={flexColumn}>
        <View style={flexRow}>
          <Container style={nbContainerStyle}>
            {header}
            <Content contentContainerStyle={contentContainerStyle}>
              {children}
            </Content>
            {footer}
            <View style={fabContainer}>
              <MainFab/>
            </View>
          </Container>
          {this.renderSpinner()}
        </View>
      </View>
    );
  }

  renderSpinner() {
    const { loading } = this.props;
    console.log('render spinner main layout', loading);
    if (loading === true) {
      return (
        <CenteredSpinner/>
      );
    }
    return null;
  }
}

MainLayout.defaultProps = {
  loading: false,
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  header: DefaultHeader(),
  footer: DefaultFooter(),
};

const styles = {
  nbContainerStyle: {
    flex: 1,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
};
export default MainLayout;
