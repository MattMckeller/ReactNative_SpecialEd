// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

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

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
})(FunctionalTemplate);
