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
  return (
    <Text style={{ fontSize: 12, ...style }}>
      {`${user.firstName} ${user.lastName}`}
    </Text>
  );
}

UserName.defaultProps = {
  style: {},
};

export default UserName;
