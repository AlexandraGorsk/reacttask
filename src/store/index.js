import { createStore } from 'redux';

import { userReducer } from './form';

export const store = createStore(userReducer);
