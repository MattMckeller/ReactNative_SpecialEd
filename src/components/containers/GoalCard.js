// @flow
import React from 'react';
import type { GoalInterface } from '../../data-models/goal/Goal.interface';

type Props = {
  goal: GoalInterface;
  goalIndex: number;
  onEditGoalPress: (goal: GoalInterface) => any,
  onDeleteGoalPress: (goal: GoalInterface) => any,
};
function GoalCard(props: Props) {
  // todo, all
  return null;
}

const styles = {};

export default GoalCard;
