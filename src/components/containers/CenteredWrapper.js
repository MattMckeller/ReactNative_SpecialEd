// @flow
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import globalStyles from '../../assets/styles/GlobalStyles';
import styleVariables from '../../assets/StyleVariables';

type Props = {
  children: any;
}
function CenteredWrapper(props: Props) {
  const { flexColumn } = globalStyles;
  const { containerStyle } = styles;
  const { children } = props;
  return (
    <View style={{ ...containerStyle, ...flexColumn, ...{ backgroundColor: 'blue' } }}>
      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{
          width: '95%', height: '100%', justifyContent: 'center', backgroundColor: 'brown',
        }}
        >
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = {
  containerStyle: {
    backgroundColor: styleVariables.primaryColor,
    height: '100%',
  },
};

CenteredWrapper.defaultProps = {};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(CenteredWrapper);
