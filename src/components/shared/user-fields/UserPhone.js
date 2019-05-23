// @flow
import React from 'react';
import { Text } from 'react-native';
import type { UserInterface } from '../../../data-models/user/User.interface';

type Props = {
  user: UserInterface,
  style?: {},
}
function UserPhone(props: Props) {
  const { user, style } = props;
  return (
    <Text style={{ fontSize: 12, ...style }}>
      {user.phone}
    </Text>
  );
}

UserPhone.defaultProps = {
  style: {},
};

export default UserPhone;
