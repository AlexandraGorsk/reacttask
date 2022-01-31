import { createStore, combineReducers } from 'redux';

import { userReducer } from './form';
const reducers = combineReducers({ users: userReducer });
export const store = createStore(reducers);
