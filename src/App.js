/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import ReduxThunk from 'redux-thunk';
import combineReducers from './redux/reducers';
import RouterComponent from './router';

type Props = {};
class App extends Component<Props> {

  render() {
    const store = createStore(combineReducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Root>
        <Provider store={store}>
          <RouterComponent />
        </Provider>
      </Root>
    );
  }
}

export default App;
