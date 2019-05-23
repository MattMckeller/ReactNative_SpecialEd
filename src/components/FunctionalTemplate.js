// @flow
import React from 'react';
import { Text } from 'react-native';

type Props = {
  test: any;
}
function FunctionalTemplate(props: Props) {
  const { test } = props;
  return (
    <Text>
      { test }
    </Text>
  );
}

FunctionalTemplate.defaultProps = {};

export default FunctionalTemplate;
