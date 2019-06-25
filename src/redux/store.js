import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppStore from './reducers';

export const AppStoreInstance = createStore(AppStore, {}, applyMiddleware(ReduxThunk));
