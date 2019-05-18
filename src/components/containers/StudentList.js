// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FlatList, ListView, View} from 'react-native';
import type { StudentInterface } from '../../data-models/student/Student.interface';
import StudentCard from './StudentCard';
import {selectedStudentFromList} from "../../redux/actions/StudentActions";

type Props = {
  students: StudentInterface[];
  selectedStudentFromListAction: (student: StudentInterface) => any;
}
class StudentList extends Component<Props> {

  constructor() {
    super();
    this.onCardPress = this.onCardPress.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  render() {
    const { students } = this.props;
    return (students && students.length > 0)
      ? (
        <FlatList
          data={students}
          renderItem={this.renderRow}
          keyExtractor={StudentList.studentKeyExtractor}
          style={{ backgroundColor: 'pink', width: '100%' }}
        />
      ) : null;
  }

  renderRow({ item }) {
    const { cardContainer } = styles;
    return (
      <View style={cardContainer}>
        <StudentCard student={item} onPress={this.onCardPress} />
      </View>
    );
  }

  static studentKeyExtractor(item: StudentInterface, index: number) {
    return item.studentId && item.studentId.length ? item.studentId : index;
  }

  onCardPress(student: StudentInterface) {
    const { selectedStudentFromListAction } = this.props;
    console.log('card press', student);
    selectedStudentFromListAction(student);
  }
}

const styles = {
  cardContainer: {
    marginBottom: 10,
  },
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  selectedStudentFromListAction: selectedStudentFromList,
})(StudentList);
