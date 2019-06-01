// @flow
import React from 'react';
import {
  Body, Button, Header, Icon, Left, Right, Title,
} from 'native-base';

function DefaultHeader() {
  return (
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
  );
}

DefaultHeader.defaultProps = {};

export default DefaultHeader;
