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
import {
  Container, Header, Title, Content, Footer,
  FooterTab, Button, Left, Right, Body, Icon, Text
} from 'native-base';
import ReduxThunk from 'redux-thunk';
import combineReducers from './reducers';
import RouterComponent from './router';
import MainLayout from "./layouts/MainLayout";

type Props = {};
class App extends Component<Props> {

  render() {
    const store = createStore(combineReducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
