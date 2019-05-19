// @flow
import {
  ADD_STUDENT_GOAL_START,
  ADD_STUDENT_GOAL_SUCCESS,
  ADD_STUDENT_GOAL_FAIL,
  EDIT_STUDENT_GOAL_START,
  EDIT_STUDENT_GOAL_SUCCESS,
  EDIT_STUDENT_GOAL_FAIL,
  DELETE_STUDENT_GOAL_START,
  DELETE_STUDENT_GOAL_SUCCESS,
  DELETE_STUDENT_GOAL_FAIL,
} from './types';
import type { GoalInterface } from '../../data-models/goal/Goal.interface';


export const addStudentGoal = (goal: GoalInterface) => (dispatch) => {
  dispatch({ type: ADD_STUDENT_GOAL_START, payload: goal });

  // todo implement backend calls
  setTimeout(() => {
    addStudentGoalSuccess(dispatch, goal);
  }, 10);

  // setTimeout(() => {
  //   addStudentGoalFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

export const editStudentGoal = (goal: GoalInterface) => (dispatch) => {
  dispatch({ type: EDIT_STUDENT_GOAL_START, payload: goal });

  // todo implement backend calls
  setTimeout(() => {
    editStudentGoalSuccess(dispatch, goal);
  }, 10);

  // setTimeout(() => {
  //   editStudentGoalFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};
export const deleteStudentGoal = (goal: GoalInterface) => (dispatch) => {
  dispatch({ type: DELETE_STUDENT_GOAL_START, payload: goal });

  // todo implement backend calls
  setTimeout(() => {
    deleteStudentGoalSuccess(dispatch, goal);
  }, 10);

  // setTimeout(() => {
  //   deleteStudentGoalFail(dispatch, { error: 'An error has occurred.' });
  // }, 10);
};

const addStudentGoalSuccess = (dispatch, goal) => {
  dispatch({ type: ADD_STUDENT_GOAL_SUCCESS, payload: goal });
};

const addStudentGoalFail = (dispatch) => {
  dispatch({
    type: ADD_STUDENT_GOAL_FAIL,
    payload: { error: 'Error from backend.' },
  });
};

const editStudentGoalSuccess = (dispatch, goal) => {
  dispatch({ type: EDIT_STUDENT_GOAL_SUCCESS, payload: goal });
};

const editStudentGoalFail = (dispatch) => {
  dispatch({
    type: EDIT_STUDENT_GOAL_FAIL,
    payload: { error: 'Error from backend.' },
  });
};

const deleteStudentGoalSuccess = (dispatch) => {
  dispatch({ type: DELETE_STUDENT_GOAL_SUCCESS, payload: null });
};

const deleteStudentGoalFail = (dispatch) => {
  dispatch({
    type: DELETE_STUDENT_GOAL_FAIL,
    payload: { error: 'Error from backend.' },
  });
};
