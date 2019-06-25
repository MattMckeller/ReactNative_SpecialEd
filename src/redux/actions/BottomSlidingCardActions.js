// @flow
import React from 'react';
import {
  HIDE_BOTTOM_SLIDING_CARD,
  SHOW_BOTTOM_SLIDING_CARD,
} from './types';

export const showBottomCard = (card: React.ReactNode) => ({
  type: SHOW_BOTTOM_SLIDING_CARD,
  payload: card,
});

export const hideBottomCard = (card: React.ReactNode) => ({
  type: HIDE_BOTTOM_SLIDING_CARD,
  payload: card,
});
