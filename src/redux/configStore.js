import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './reducers/accountReducer';
import ideaReducer from './reducers/ideaReducer';
import categoryReducer from './reducers/categoryReducer';
import academicYearReducer from './reducers/academicYearReducer';
import departmentReducer from './reducers/departmentReducer';
import loadingReducer from './reducers/loadingReducer';
export const store = configureStore({
   reducer: {
      accountReducer,
      ideaReducer,
      categoryReducer,
      academicYearReducer,
      departmentReducer,
      loadingReducer,
   },
});
