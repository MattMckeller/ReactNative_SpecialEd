// @flow
import { MY_USER_TEST_DATA } from './users';
import type { GoalInterface } from '../../src/data-models/goal/Goal.interface';

export const STUDENT_GOAL_TEST_DATA: GoalInterface[] = [
  {
    goalNumber: 1,
    goal: 'This is a goal 1',
    createdAt: '01/01/2019',
    updatedAt: '01/01/2020',
    student: {},
    user: MY_USER_TEST_DATA,
    notes: [],
  },
  {
    goalNumber: 2,
    goal: 'This is a goal 2 with long text with long text with long text with long text with long text with long text with long text with long text with long text',
    createdAt: '01/02/2019',
    updatedAt: '01/02/2020',
    student: {},
    user: MY_USER_TEST_DATA,
    notes: [],
  },
  {
    goalNumber: 3,
    goal: 'This is a goal 3',
    createdAt: '01/03/2019',
    updatedAt: '01/03/2020',
    student: {},
    user: MY_USER_TEST_DATA,
    notes: [],
  },
  {
    goalNumber: 4,
    goal: 'This is a goal 4',
    createdAt: '01/04/2019',
    updatedAt: '01/04/2020',
    student: {},
    user: MY_USER_TEST_DATA,
    notes: [],
  },
];
