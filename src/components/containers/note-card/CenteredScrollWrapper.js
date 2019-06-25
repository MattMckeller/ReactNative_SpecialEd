// @flow
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import globalStyles from '../../assets/styles/GlobalStyles';
import styleVariables from '../../assets/StyleVariables';

type Props = {
  children: any;
  outerContainerStyle?: {},
}

function CenteredWrapper(props: Props) {
  const { flexColumn } = globalStyles;
  let {
    outerContainerStyle,
  } = styles;
  const {
    innerContainerStyle,
    secondContainerStyle,
  } = styles;
  const {
    outerContainerStyle: outerContainerStyleProp,
    children,
  } = props;

  outerContainerStyle = { ...outerContainerStyle, ...outerContainerStyleProp };
  return (
    <View style={{
      ...outerContainerStyle,
      ...flexColumn,
      ...{ backgroundColor: 'blue' },
    }}
    >
      <View style={secondContainerStyle}>
        <View style={innerContainerStyle}>
          {children}
        </View>
      </View>
    </View>
  );
}

const styles = {
  outerContainerStyle: {
    backgroundColor: styleVariables.primaryColor,
  },
  secondContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainerStyle: {
    width: '95%',
    height: '100%',
    backgroundColor: 'brown',
    justifyContent: 'center',
  },
};

CenteredWrapper.defaultProps = {
  outerContainerStyle: {},
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(CenteredWrapper);
