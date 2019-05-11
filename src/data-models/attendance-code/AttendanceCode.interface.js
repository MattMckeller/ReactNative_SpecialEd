// @flow
import type { AttendanceRecordInterface } from '../attendance-record/AttendanceRecord.interface';

export interface AttendanceCodeInterface {
  code: string;
  description: string;
  attendanceRecords: AttendanceRecordInterface[];
}
