import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppStore from './redux/reducers';

export const AppStoreInstance = createStore(AppStore, {}, applyMiddleware(ReduxThunk));
