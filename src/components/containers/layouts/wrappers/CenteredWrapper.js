// @flow
import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import globalStyles from '../../../../assets/styles/GlobalStyles';
import styleVariables from '../../../../assets/StyleVariables';

type Props = {
  children: any;
  outerContainerStyle?: {},
  innerContainerStyle?: {},
}

function CenteredWrapper(props: Props) {
  const { flexColumn } = globalStyles;
  let {
    outerContainerStyle,
    innerContainerStyle,
  } = styles;
  const {
    secondContainerStyle,
  } = styles;
  const {
    outerContainerStyle: outerContainerStyleProp,
    innerContainerStyle: innerContainerStyleProp,
    children,
  } = props;

  outerContainerStyle = { ...outerContainerStyle, ...outerContainerStyleProp };
  innerContainerStyle = { ...innerContainerStyle, ...innerContainerStyleProp };
  return (
    <View style={{
      ...outerContainerStyle,
      ...flexColumn,
      ...{ backgroundColor: 'transparent' },
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
    backgroundColor: 'transparent',
  },
  innerContainerStyle: {
    width: '95%',
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
};

CenteredWrapper.defaultProps = {
  outerContainerStyle: {},
  innerContainerStyle: {},
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(CenteredWrapper);
