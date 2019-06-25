// @flow
import {
  MAIN_FAB_CONFIGURE, MAIN_FAB_TOGGLE,
} from '../actions/types';
import type { MainFabConfigurationOptions } from '../actions/MainFabActions';
import { MultiTypeIconTypes } from '../../components/shared/icons/MultiTypeIcon';

const INITIAL_STATE: MainFabConfigurationOptions = {
  iconName: 'plus',
  iconType: MultiTypeIconTypes.FontAwesome5,
  height: 50,
  width: 50,
  backgroundColor: 'blue',
  iconColor: 'white',
  active: false,
  position: 'bottomRight',
  direction: 'up',
  containerStyle: {},
  buttons: [],
};
const MainFabReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case MAIN_FAB_CONFIGURE:
      return { ...state, ...payload };
    case MAIN_FAB_TOGGLE:
      return {
        ...state,
        active: (payload !== undefined && payload !== null) ? !!payload : !state.active,
      };
    default:
      return state;
  }
};

export default MainFabReducer;
