import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './reducers/accountReducer';
import ideaReducer from './reducers/ideaReducer';
import categoriesReducer from './reducers/categoriesReducer';
export const store = configureStore({
   reducer: {
      accountReducer,
      ideaReducer,
      categoriesReducer,
   },
});
