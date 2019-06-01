// @flow
import React from 'react';
import { Text } from 'react-native';
import { Button, Footer, FooterTab } from 'native-base';

function DefaultFooter() {
  return (
    <Footer>
      <FooterTab>
        <Button full>
          <Text>Footer</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
}

DefaultFooter.defaultProps = {};

export default DefaultFooter;
