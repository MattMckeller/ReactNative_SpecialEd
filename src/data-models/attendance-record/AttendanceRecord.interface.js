// @flow
import type { UserInterface } from '../user/User.interface';
import type { StudentInterface } from '../student/Student.interface';
import type { AttendanceCodeInterface } from '../attendance-code/AttendanceCode.interface';

export interface AttendanceRecordInterface {
  date: string;
  attendanceCode: AttendanceCodeInterface;
  user: UserInterface;
  student: StudentInterface;
}
