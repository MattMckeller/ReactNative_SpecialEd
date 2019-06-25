// @flow
import React from 'react';
import { connect } from 'react-redux';
import globalStyles from '../../../../assets/styles/GlobalStyles';
import ViewOrScrollView from '../rename-hoc/ViewOrScrollView';
import styleVariables from '../../../../assets/StyleVariables';
import { View } from 'react-native';

type Props = {
  children: any;
  outerContainerStyle?: {};
  scrollView?: boolean;
}

function CenteredWrapper(props: Props) {
  const { flexColumn } = globalStyles;
  let {
    outerContainerStyle,
  } = styles;
  let {
    innerContainerStyle,
  } = styles;
  const {
    secondContainerStyle,
    innerContainerContentStyle,
  } = styles;

  const {
    outerContainerStyle: outerContainerStyleProp,
    children,
    scrollView,
  } = props;
  outerContainerStyle = { ...outerContainerStyle, ...outerContainerStyleProp };
  innerContainerStyle = (scrollView !== true)
    ? { ...innerContainerStyle, ...innerContainerContentStyle }
    : innerContainerStyle;

  // innerContainerStyle = { ...innerContainerStyle, ...innerContainerContentStyle };
  // const secondContentContainerStyle = (scrollView === true) ? { ...secondContainerStyle } : {};
  // secondContainerStyle = (scrollView !== true) ? { ...secondContainerStyle } : {};
  // console.log({ secondContainerStyle, secondContentContainerStyle, scrollView });
  return (
    <View
      style={{
        ...outerContainerStyle,
        ...flexColumn,
        ...{ backgroundColor: 'blue' },
      }}
    >
      <View
        style={secondContainerStyle}
      >
        <ViewOrScrollView
          style={innerContainerStyle}
          scrollView={scrollView}
          scrollViewContentContainerStyle={innerContainerContentStyle}
        >
          {children}
        </ViewOrScrollView>
      </View>
    </View>
  );
}

CenteredWrapper.defaultProps = {
  scrollView: false,
};

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
