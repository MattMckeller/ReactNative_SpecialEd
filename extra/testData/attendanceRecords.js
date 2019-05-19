// @flow
import { MY_USER_TEST_DATA, USER_1_TEST_DATA, USER_2_TEST_DATA } from './users';
import type { AttendanceRecordInterface } from '../../src/data-models/attendance-record/AttendanceRecord.interface';

export const STUDENT_ATTENDANCE_RECORD_TEST_DATA: AttendanceRecordInterface[] = [
  {
    date: '01/01/2019',
    attendanceCode: 'CODE_1',
    user: MY_USER_TEST_DATA,
    // student: {},
  },
  {
    date: '01/02/2019',
    attendanceCode: 'CODE_2',
    user: USER_1_TEST_DATA,
    // student: {},
  },
  {
    date: '01/03/2019',
    attendanceCode: 'CODE_3',
    user: USER_2_TEST_DATA,
    // student: {},
  },
  {
    date: '01/04/2019',
    attendanceCode: 'CODE_1',
    user: MY_USER_TEST_DATA,
    // student: {},
  },
  {
    date: '01/05/2019',
    attendanceCode: 'CODE_1',
    user: MY_USER_TEST_DATA,
    // student: {},
  },
];
