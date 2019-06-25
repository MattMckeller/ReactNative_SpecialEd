// @flow
import React from 'react';
import { View } from 'react-native';
import MultiTypeIcon from './MultiTypeIcon';

type Props = {
  height?: number | string;
  width?: number | string;
}

function HistoryIcon(props: Props) {
  const { height, width } = props;
  const { iconStyle, rootContainerStyle } = styles;
  return (
    <View style={{ height, width, ...rootContainerStyle }}>
      <MultiTypeIcon
        name="history"
        style={iconStyle}
      />
    </View>
  );
}

const styles = {
  rootContainerStyle: {
    borderRadius: 50,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    color: '#000000',
    fontSize: 12,
  },
};

HistoryIcon.defaultProps = {
  height: 20,
  width: 20,
};

export default HistoryIcon;
