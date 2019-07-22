import React from 'react';
import { Text } from 'react-native';
import {
  HIDE_BOTTOM_SLIDING_CARD,
  SHOW_BOTTOM_SLIDING_CARD,
} from '../actions/types';


const INITIAL_STATE = {
  showing: false,
  node: <Text>Placeholder</Text>,
  onCloseCallback: () => { console.log('default callback'); },
};
const BottomSlidingCardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_BOTTOM_SLIDING_CARD:
      return {
        ...state,
        showing: true,
        node: action.payload.node,
        onCloseCallback: action.payload.onCloseCallback,
      };
    case HIDE_BOTTOM_SLIDING_CARD:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default BottomSlidingCardReducer;
