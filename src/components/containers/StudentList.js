// @flow
import React from 'react';
import { FlatList, View } from 'react-native';
import type { StudentInterface } from '../../data-models/student/Student.interface';
import StudentCard from './StudentCard';

type Props = {
  students: StudentInterface[];
  onSelectStudent: (student: StudentInterface) => any;
}

/**
 * @return {null}
 */
function StudentList(props: Props) {
  const {
    students,
    onSelectStudent,
  } = props;

  // eslint-disable-next-line
  const renderRow = ({ item }) => {
    const { cardContainer } = styles;
    return (
      <View style={cardContainer}>
        <StudentCard student={item} onPress={onSelectStudent} />
      </View>
    );
  };

  // eslint-disable-next-line
  const keyExtractor = (item: StudentInterface, index: number) => (item.studentId && item.studentId.length ? item.studentId : index);

  return (students && students.length > 0)
    ? (
      <FlatList
        data={students}
        renderItem={renderRow}
        keyExtractor={keyExtractor}
        style={{ backgroundColor: 'pink', width: '100%' }}
      />
    ) : null;
}

const styles = {
  cardContainer: {
    marginBottom: 10,
  },
};

export default StudentList;
