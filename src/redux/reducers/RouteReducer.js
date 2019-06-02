import { NAVIGATION_STATE_CHANGE } from '../actions';

const INITIAL_STATE = {
  currentRoute: '',
};
const RouteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAVIGATION_STATE_CHANGE:
      return {
        ...state,
        currentRoute: action.payload,
      };
    default:
      return state;
  }
};

export default RouteReducer;
