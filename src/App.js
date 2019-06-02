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
import AppNavigator from './router';
import { AppStoreInstance } from './store';
import { NAVIGATION_STATE_CHANGE } from './redux/actions';


const App = () => (
  <Root>
    <Provider store={AppStoreInstance}>
      <AppNavigator
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
    console.log('Current Route Name:', navState.routeName);
    AppStoreInstance.dispatch({ type: NAVIGATION_STATE_CHANGE, payload: navState.routeName });
  }
};

export default App;
