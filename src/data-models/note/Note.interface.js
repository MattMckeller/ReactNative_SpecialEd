// @flow
import type { StudentInterface } from '../student/Student.interface';
import type { UserInterface } from '../user/User.interface';
import type {GoalInterface} from "../goal/Goal.interface";

export interface NoteInterface {
  name: string;
  date: string; // date
  minutes: number | string;
  student: StudentInterface;
  user: UserInterface;
  goals: GoalInterface[];
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
}
