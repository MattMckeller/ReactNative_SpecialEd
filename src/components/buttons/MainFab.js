// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMainFab } from '../../redux/actions';
import { CustomFab } from './CustomFab';
import MultiTypeIcon from '../shared/icons/MultiTypeIcon';
import { View } from 'react-native';

// todo, merge with action creator options once I figure out how to do type mappings in flow
type Props = {
  iconName: string,
  iconType: string,
  height: number | string,
  width: number | string,
  backgroundColor: string,
  iconColor: string,
  active: boolean,
  position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight',
  direction: 'up' | 'down' | 'left' | 'right',
  containerStyle: {},
  buttons: React.Component[],
  toggleMainFabAction: () => void,
}

class MainFab extends Component<Props> {
  constructor() {
    super();
    this.onPress = this.onPress.bind(this);
  }

  render() {
    const {
      iconName,
      iconType,
      height,
      width,
      backgroundColor,
      iconColor,
      active,
      position,
      direction,
      containerStyle,
      buttons,
    } = this.props;
    const wrapperStyle = { height, width };
    return (
      <View style={wrapperStyle}>
        <CustomFab
          active={active}
          containerStyle={containerStyle}
          style={{ backgroundColor }}
          direction={direction}
          position={position}
          onPress={this.onPress}
        >
          <MultiTypeIcon name={iconName} multiIconType={iconType} style={{ color: iconColor }}/>
          {buttons}
        </CustomFab>
      </View>
    );
  }

  onPress() {
    console.log('fab pressed'); // todo remove
    const { toggleMainFabAction } = this.props;
    if (toggleMainFabAction) {
      toggleMainFabAction();
    }
  }
}

const mapStateToProps = (state) => {
  const { mainFab } = state;
  const {
    iconName,
    iconType,
    height,
    width,
    backgroundColor,
    iconColor,
    active,
    position,
    direction,
    containerStyle,
    buttons,
  } = mainFab;
  return {
    iconName,
    iconType,
    height,
    width,
    backgroundColor,
    iconColor,
    active,
    position,
    direction,
    containerStyle,
    buttons,
  };
};

export default connect(mapStateToProps, {
  toggleMainFabAction: toggleMainFab,
  iconType: MultiTypeIcon.FontAwesome5,

})(MainFab);
