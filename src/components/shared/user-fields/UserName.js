// @flow
import React from 'react';
import { Text } from 'react-native';
import type { UserInterface } from '../../../data-models/user/User.interface';

type Props = {
  user: UserInterface,
  style?: {},
}

function UserName(props: Props) {
  const { user, style } = props;
  const name = (user && (user.firstName.length || user.lastName.length))
    ? `${user.firstName} ${user.lastName}`.trim()
    : 'Unknown';
  return (
    <Text style={{ fontSize: 12, ...style }}>
      {name}
    </Text>
  );
}

UserName.defaultProps = {
  style: {},
};

export default UserName;
