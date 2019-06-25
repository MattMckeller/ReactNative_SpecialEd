// @flow
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';

type Props = {
  height?: number | string;
  width?: number | string;
}
function StudentProfileIcon(props: Props) {
  const { height, width } = props;
  const { iconStyle, rootContainerStyle } = styles;
  return (
    <View style={{ height, width, ...rootContainerStyle }}>
      <Icon
        name="user-alt"
        style={iconStyle}
      />
    </View>
  );
}

const styles = {
  rootContainerStyle: {
    borderRadius: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    color: '#000000',
    fontSize: 50,
  },
};

StudentProfileIcon.defaultProps = {
  height: 100,
  width: 100,
};

export default StudentProfileIcon;
