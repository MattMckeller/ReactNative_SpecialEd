// @flow
import type { NoteInterface } from '../note/Note.interface';
import type { GoalInterface } from '../goal/Goal.interface';
import type { RoleInterface } from '../role/Role.interface';
import type { SchoolInterface } from '../school/School.interface';

export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  schools: SchoolInterface[];
  notes: NoteInterface[];
  goals: GoalInterface[];
  roles: RoleInterface[];
}
