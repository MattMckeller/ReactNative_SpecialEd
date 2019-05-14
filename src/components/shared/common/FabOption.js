// @flow
import React from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'native-base';

type Props = {
  label: string,
  onPress: () => any,
  iconName: string,
  iconType?: string,
  iconColor?: string,
  key?: string | number, // defaults to provided name
}
function FabOption(props: Props) {
  let { key } = props;
  const {
    iconName,
    iconType,
    iconColor,
    label,
    onPress,
  } = props;
  key = (key !== null && key.length) ? key : iconName;
  const {
    containerStyle,
    labelStyle,
    dimensions,
    buttonStyle,
    iconContainerStyle,
    labelContainerStyle,
  } = styles;
  return (
    <Button key={key} style={{ ...dimensions, ...buttonStyle }} onPress={onPress}>
      <View style={{ ...containerStyle, ...dimensions }}>
        <View style={iconContainerStyle}>
          <Icon
            name={iconName}
            type={iconType}
            style={{ color: iconColor }}
            fontSize={10}
          />
        </View>
        <View style={{ ...labelContainerStyle }}>
          <Text style={labelStyle}>{label}</Text>
        </View>
      </View>
    </Button>

  );
}

const styles = {
  dimensions: {
    width: 100,
    height: 50,
  },
  buttonStyle: {
    backgroundColor: 'transparent',
    background: 'transparent',
  },
  containerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  labelStyle: {
    fontSize: 10,
    color: 'black',
    textAlign: 'center',
  },
  labelContainerStyle: {
    height: 15,
    width: '100%',
  },
  iconContainerStyle: {
    height: 35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderColor: 'blue',
  },
};

FabOption.defaultProps = {
  key: null,
  iconType: 'FontAwesome5',
  iconColor: 'black',
};

export default FabOption;
