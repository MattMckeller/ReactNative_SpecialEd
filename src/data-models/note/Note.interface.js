// @flow
import type { StudentInterface } from '../student/Student.interface';
import type { UserInterface } from '../user/User.interface';
import type { GoalInterface } from '../goal/Goal.interface';

export interface NoteInterface {
  id: number,
  name: string;
  text: string;
  date: string; // date or timestamp
  minutes: number | string;
  student: StudentInterface;
  user: UserInterface;
  goals: GoalInterface[];
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
}
