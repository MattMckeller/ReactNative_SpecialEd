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
  Body, Button, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Text, Title,
} from 'native-base';
import globalStyles from '../assets/styles/GlobalStyles';
import MainFab from '../components/buttons/MainFab';
import CenteredSpinner from "../components/shared/common/CenteredSpinner";

type Props = {
  children: any,
  loading?: boolean,
};
class MainLayout extends Component<Props> {
  render() {
    const { children } = this.props;
    const {
      contentContainerStyle,
      containerStyle,
      fabContainer,
    } = styles;
    const { flexRow, flexColumn } = globalStyles;
    return (
      <View style={flexColumn}>
        <View style={flexRow}>
          <Container style={containerStyle}>
            <Header>
              <Left>
                <Button transparent>
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body>
                <Title>Header</Title>
              </Body>
              <Right />
            </Header>
            <Content contentContainerStyle={contentContainerStyle}>
              {children}
            </Content>
            <Footer>
              <FooterTab>
                <Button full>
                  <Text>Footer</Text>
                </Button>
              </FooterTab>
            </Footer>
            <View style={fabContainer}>
              <MainFab />
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
        <CenteredSpinner />
      );
    }
    return null;
  }
}

MainLayout.defaultProps = {
  loading: false,
};

const styles = {
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  containerStyle: {
    flex: 1,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
};
export default MainLayout;
