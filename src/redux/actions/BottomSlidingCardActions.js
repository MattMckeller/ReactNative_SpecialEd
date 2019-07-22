// @flow
import React from 'react';
import {
  HIDE_BOTTOM_SLIDING_CARD,
  SHOW_BOTTOM_SLIDING_CARD,
} from './types';

export const showBottomCard = (node: React.ReactNode, onCloseCallback: () => any) => ({
  type: SHOW_BOTTOM_SLIDING_CARD,
  payload: {
    node,
    onCloseCallback,
  },
});

export const hideBottomCard = (card: React.ReactNode) => ({
  type: HIDE_BOTTOM_SLIDING_CARD,
  payload: card,
});
