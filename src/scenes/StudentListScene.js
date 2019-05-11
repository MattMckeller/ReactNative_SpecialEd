// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import globalStyles from '../assets/styles/GlobalStyles';
import styleVariables from '../assets/StyleVariables';
import MainLayout from '../layouts/MainLayout';
import StudentList from '../components/display/StudentList';

type Props = {
}
class StudentListScene extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    const { flexColumn } = globalStyles;
    const { containerStyle } = styles;
    // todo move background here
    console.log('student list scene');
    return (
      <MainLayout>
        {/* todo maybe combine these multiple views into a single component */}
        <View style={{ ...containerStyle, ...flexColumn, ...{backgroundColor: 'blue'} }}>
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '95%', height: '100%', justifyContent: 'center', backgroundColor: 'brown' }}>
              <StudentList students={[
                {
                  firstName: 'Bob',
                  lastName: 'Smith',
                  studentId: '12345',
                  updatedAt: '12:20 pm',
                },
                {
                  firstName: 'John',
                  lastName: 'Philips',
                  studentId: '64213',
                  updatedAt: '3:40 pm',
                },
                {
                  firstName: 'Suzy',
                  lastName: 'Garcia',
                  studentId: '93839',
                  updatedAt: '10:15 am',
                },
                {
                  firstName: 'Hailey',
                  lastName: 'Vaughn',
                  studentId: '54321',
                  updatedAt: '8:00 am',
                },
                //
                {
                  firstName: 'Joe',
                  lastName: 'Johnson',
                  studentId: '37389',
                  updatedAt: '8:00 am',
                },
                {
                  firstName: 'Uday',
                  lastName: 'Ulzech',
                  studentId: '76350',
                  updatedAt: '8:00 am',
                },
                {
                  firstName: 'Ivan',
                  lastName: 'Little',
                  studentId: '10767',
                  updatedAt: '8:00 am',
                },
                {
                  firstName: 'Marvin',
                  lastName: 'Mellow',
                  studentId: '00001',
                  updatedAt: '8:00 am',
                },
                {
                  firstName: 'Timmy',
                  lastName: 'Tucker',
                  studentId: '25633',
                  updatedAt: '8:00 am',
                },
              ]}
              />
            </View>
          </View>
        </View>
      </MainLayout>
    );
  }
}

const styles = {
  containerStyle: {
    backgroundColor: styleVariables.primaryColor,
    height: '100%',
  },
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(StudentListScene);
