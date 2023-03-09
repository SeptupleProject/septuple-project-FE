import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './reducers/accountReducer';
import ideaReducer from './reducers/ideaReducer';
import categoriesReducer from './reducers/categoriesReducer';
import academicYearReducer from './reducers/academicYearReducer';
export const store = configureStore({
   reducer: {
      accountReducer,
      ideaReducer,
      categoriesReducer,
      academicYearReducer,
   },
});
