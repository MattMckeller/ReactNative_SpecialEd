// @flow
import type { StudentInterface } from '../student/Student.interface';
import type {UserInterface} from "../user/User.interface";

export interface SchoolInterface {
  name: string;
  city: string;
  state: string;
  zip: string;
  students: StudentInterface[];
  users: UserInterface[];
}
