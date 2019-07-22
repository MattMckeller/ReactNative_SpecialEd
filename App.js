/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { connect, Provider } from 'react-redux';
import { Root } from 'native-base';
import AppNavigator from './src/navigation/router';
import { AppStoreInstance } from './src/redux/store';
import { displayedToast, NAVIGATION_STATE_CHANGE } from './src/redux/actions';
import BottomSlidingCardWrapper
  from './src/components/containers/app-wrappers/bottom-sliding-card/BottomSlidingCardWrapper';
import ToastWrapper from './src/components/containers/app-wrappers/ToastWrapper';
import type { ToastInterface } from './src/redux/reducers/ToastReducer';
import LoadingWrapper from './src/components/containers/app-wrappers/LoadingWrapper';

const App = () => (
  <Root>
    <Provider store={AppStoreInstance}>
      <ReduxAwareAppContainer/>
    </Provider>
  </Root>
);


type Props = {
  showingBottomSlidingCard: boolean,
  bottomSlidingCardNode: React.ReactNode,
  hideBottomCardAction: () => any,
  onCloseBottomCardCallback: () => any,
  pendingToasts: ToastInterface[],
  displayedToastAction: () => any,
  loading: boolean,
}
let ReduxAwareAppContainer = ({
  showingBottomSlidingCard,
  bottomSlidingCardNode,
  onCloseBottomCardCallback,
  pendingToasts,
  displayedToastAction,
  loading,
}: Props) => {
  console.log('here - redux aware app container', onCloseBottomCardCallback);
  return (
    <LoadingWrapper loading={loading}>
      <ToastWrapper pendingToasts={pendingToasts} displayedToastAction={displayedToastAction}>
        <BottomSlidingCardWrapper
          onClose={onCloseBottomCardCallback}
          showingBottomSlidingCard={showingBottomSlidingCard}
          bottomSlidingCardNode={bottomSlidingCardNode}
        >
          <AppNavigator
            onNavigationStateChange={onNavigationStateChange}
          />
        </BottomSlidingCardWrapper>
      </ToastWrapper>
    </LoadingWrapper>
  );
};


// eslint-disable-next-line
const mapStateToProps_ReduxAwareAppContainer = (state) => {
  const {
    bottomSlidingCardState: {
      showing,
      node,
      onCloseCallback,
    },
    toasts: {
      pendingToasts,
    },
    loadingState: {
      loading,
    },
  } = state;
  return {
    showingBottomSlidingCard: showing,
    bottomSlidingCardNode: node,
    onCloseBottomCardCallback: onCloseCallback,
    pendingToasts,
    loading,
  };
};

ReduxAwareAppContainer = connect(
  mapStateToProps_ReduxAwareAppContainer,
  {
    displayedToastAction: displayedToast,
  },
)(ReduxAwareAppContainer);


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
