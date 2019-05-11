// @flow
import type { StudentInterface } from '../student/Student.interface';
import type { UserInterface } from '../user/User.interface';
import type { NoteInterface } from '../note/Note.interface';

export interface GoalInterface {
  goalNumber: number | string;
  goal: string;
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  student: StudentInterface;
  user: UserInterface;
  notes: NoteInterface[];
}
