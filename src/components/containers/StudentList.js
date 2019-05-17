// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FlatList, ListView, View} from 'react-native';
import type { StudentInterface } from '../../data-models/student/Student.interface';
import StudentCard from './StudentCard';

type Props = {
  students: StudentInterface[];
}
class StudentList extends Component<Props> {

  render() {
    const { students } = this.props;
    console.log('student list', students);
    return (students && students.length > 0)
      ? (
        <FlatList
          data={students}
          renderItem={StudentList.renderRow}
          keyExtractor={StudentList.studentKeyExtractor}
          style={{ backgroundColor: 'pink', width: '100%' }}
        />
      ) : null;
  }

  static renderRow({ item }) {
    console.log('render row , student data ', item);
    const { cardContainer } = styles;
    return (
      <View style={cardContainer}>
        <StudentCard student={item} />
      </View>
    );
  }

  static studentKeyExtractor(item: StudentInterface, index: number) {
    return item.studentId && item.studentId.length ? item.studentId : index;
  }
}

const styles = {
  cardContainer: {
    marginBottom: 10,
  },
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(StudentList);
