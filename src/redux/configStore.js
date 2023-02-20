import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './reducers/accountReducer';
export const store = configureStore({
   reducer: {
      accountReducer,
   },
});
