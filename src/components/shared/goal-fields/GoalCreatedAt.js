// @flow
import React from 'react';
import { Text } from 'react-native';
import type { GoalInterface } from '../../../data-models/goal/Goal.interface';

type Props = {
  goal: GoalInterface,
  style?: {},
}
function GoalCreatedAt(props: Props) {
  const { goal, style } = props;
  return (
    <Text style={{ fontSize: 12, ...style }}>
      {goal.createdAt}
    </Text>
  );
}

GoalCreatedAt.defaultProps = {
  style: {},
};

export default GoalCreatedAt;
