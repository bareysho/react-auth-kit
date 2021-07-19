import { combineReducers } from 'redux';

import { authSlice } from './auth';
import { userSettingsSlice } from './userSettings';

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  userSettings: userSettingsSlice.reducer,
});
