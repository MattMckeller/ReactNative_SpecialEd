// @flow
import React from 'react';
import { Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export const MultiTypeIconTypes = {
  FontAwesome5: 'FontAwesome5',
};

type Props = {
  name: string,
  multiIconType?: string,
  style?: {},
  size?: number,
}

function MultiTypeIcon(props: Props) {
  const { multiIconType } = props;
  switch (multiIconType) {
    case MultiTypeIconTypes.FontAwesome5:
      return <FontAwesome5 {...props} />;
    default:
      return <FontAwesome5 {...props}/>;
  }
}

MultiTypeIcon.defaultProps = {
  style: { color: 'black' },
  size: 20,
  multiIconType: MultiTypeIconTypes.FontAwesome5,
};

export default MultiTypeIcon;
