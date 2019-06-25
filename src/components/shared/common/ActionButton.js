// @flow
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';
import MultiTypeIcon, { MultiTypeIconTypes } from '../icons/MultiTypeIcon';

type Props = {
  label: string,
  onPress: () => any,
  iconName: string,
  multiIconType?: string,
  iconColor?: string,
  labelColor?: string,
}

function ActionButton(props: Props) {
  const {
    iconName,
    multiIconType,
    iconColor,
    labelColor,
    label,
    onPress,
  } = props;
  const {
    containerStyle,
    labelStyle,
    dimensions,
    buttonStyle,
    iconContainerStyle,
    labelContainerStyle,
  } = styles;
  return (
    <Button style={{ ...dimensions, ...buttonStyle }} onPress={onPress}>
      <View style={{ ...containerStyle, ...dimensions }}>
        <View style={iconContainerStyle}>
          <MultiTypeIcon
            name={iconName}
            multiIconType={multiIconType}
            style={{ color: iconColor }}
            size={20}
          />
        </View>
        <View style={{ ...labelContainerStyle }}>
          <Text style={{ ...labelStyle, color: labelColor }}>{label}</Text>
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

ActionButton.defaultProps = {
  multiIconType: MultiTypeIconTypes.FontAwesome5,
  iconColor: 'black',
  labelColor: 'black',
};

export default ActionButton;
