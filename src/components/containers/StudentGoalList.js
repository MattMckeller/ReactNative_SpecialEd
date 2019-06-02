// @flow
import React from 'react';
import { FlatList, View } from 'react-native';
import type { GoalInterface } from '../../data-models/goal/Goal.interface';
import GoalCard from './GoalCard';

type Props = {
  goals: GoalInterface[];
  onEditGoalPress: (goal: GoalInterface) => any;
  onDeleteGoalPress: (goal: GoalInterface) => any;
}

/**
 * @return {null}
 */
function StudentGoalList(props: Props) {
  const {
    goals,
    onEditGoalPress,
    onDeleteGoalPress,
  } = props;

  // eslint-disable-next-line
  const renderRow = ({ item, index }) => {
    const { cardContainer } = styles;
    return (
      <View style={cardContainer}>
        <GoalCard
          goal={item}
          goalIndex={index}
          onEditGoalPress={onEditGoalPress}
          onDeleteGoalPress={onDeleteGoalPress}
        />
      </View>
    );
  };

  // eslint-disable-next-line
  const keyExtractor = (item: GoalInterface, index: number) => (item.id && item.id.toString().length ? item.id.toString() : index.toString());

  return (goals && goals.length > 0)
    ? (
      <FlatList
        data={goals}
        renderItem={renderRow}
        keyExtractor={keyExtractor}
        style={{ backgroundColor: 'pink', width: '100%' }}
      />
    ) : null;
};

const styles = {
  cardContainer: {
    marginBottom: 10,
  },
};

export default StudentGoalList;
