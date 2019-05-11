// @flow
import type {SchoolInterface} from "../school/School.interface";

export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  schools: SchoolInterface[];
  // note: NoteInterface[];
  // goals: GoalInterface[];
  roles: RoleInterface[];
}
