/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import AppNavigator from './src/navigation/router';
import { AppStoreInstance } from './src/redux/store';
import { NAVIGATION_STATE_CHANGE } from './src/redux/actions';
import bottomSlidingCardWrapper from './src/components/rename-hoc/BottomSlidingCardWrapper';

const WrappedNavigator = bottomSlidingCardWrapper(<AppNavigator/>);

const App = () => (
  <Root>
    <Provider store={AppStoreInstance}>
      <WrappedNavigator
        onNavigationStateChange={onNavigationStateChange}
      />
    </Provider>
  </Root>
);

const onNavigationStateChange = (prevState, newState) => {
  getCurrentRouteName(newState);
};

const getCurrentRouteName = (navState) => {
  if (navState.index) {
    getCurrentRouteName(navState.routes[navState.index]);
  } else {
    AppStoreInstance.dispatch({ type: NAVIGATION_STATE_CHANGE, payload: navState.routeName });
  }
};

export default App;
