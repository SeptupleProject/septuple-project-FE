import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './reducers/accountReducer';
import ideaReducer from './reducers/ideaReducer';
export const store = configureStore({
   reducer: {
      accountReducer,
      ideaReducer,
   },
});
