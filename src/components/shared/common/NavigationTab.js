// @flow
import React from 'react';
import { View } from 'react-native';
import styleVariables from '../../../assets/StyleVariables';

type Props = {
  isActive: boolean,
  width?: boolean | string,
  height?: boolean | string,
  activeBackgroundColor?: string,
  defaultBackgroundColor?: string,
  children: any,
}

function NavigationTab(props: Props) {
  const {
    isActive,
    children,
    height,
    width,
    defaultBackgroundColor,
    activeBackgroundColor,
  } = props;
  let { outerContainerStyle } = styles;
  const { innerContainerStyle } = styles;
  outerContainerStyle = {
    ...outerContainerStyle, height, width, minHeight: height, minWidth: width,
  };
  outerContainerStyle.backgroundColor = (isActive) ? activeBackgroundColor : defaultBackgroundColor;

  return (
    <View style={outerContainerStyle}>
      <View style={innerContainerStyle}>
        {children}
      </View>
    </View>
  );
}

NavigationTab.defaultProps = {
  width: '100%',
  height: '100%',
  activeBackgroundColor: styleVariables.activeNavigationTabBackgroundColor,
  defaultBackgroundColor: styleVariables.defaultNavigationTabBackgroundColor,
};

const styles = {
  outerContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainerStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
};

export default NavigationTab;
