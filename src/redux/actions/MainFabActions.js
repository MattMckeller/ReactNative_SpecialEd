// @flow
import React from 'react';
import {
  MAIN_FAB_CONFIGURE, MAIN_FAB_TOGGLE,
} from './types';

// todo figure out how to do type mapping in flow
export type MainFabConfigurationOptions = {
  iconName?: string,
  iconType?: string,
  height?: number | string,
  width?: number | string,
  backgroundColor?: string,
  iconColor?: string,
  active?: boolean,
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight',
  direction?: 'up' | 'down' | 'left' | 'right',
  containerStyle?: {},
  buttons?: React.Component[],
}
export const configureMainFab = (configuration: MainFabConfigurationOptions) => ({
  type: MAIN_FAB_CONFIGURE,
  payload: configuration,
});

/**
 * If active is not specified, should toggle value, otherwise use provided val
 * @param active
 * @returns {{payload: *, type: string}}
 */
export const toggleMainFab = (active?: boolean) => ({
  type: MAIN_FAB_TOGGLE,
  payload: active,
});
