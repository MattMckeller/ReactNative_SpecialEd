// @flow
import type { SchoolInterface } from '../school/School.interface';
import type { GradeInterface } from '../grade/Grade.interface';
import type {NoteInterface} from "../note/Note.interface";
import type {GoalInterface} from "../goal/Goal.interface";

export interface StudentInterface {
  firstName: string;
  middleInitial?: string;
  lastName: string;
  studentId: string;
  birthDate?: string; // Date
  gender?: string; // todo make enum
  createdAt: string; // todo timestamp
  updatedAt: string; // todo timestamp
  grade: GradeInterface;
  school: SchoolInterface;
  notes: NoteInterface;
  goals: GoalInterface;
}
