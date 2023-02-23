import { createSlice } from '@reduxjs/toolkit';
import { wait } from '@testing-library/user-event/dist/utils';

const initialState = {
   show: false,
};
const LoadingSpinnerReducer = createSlice({
   name: 'LoadingSpinnerReducer',
   initialState,
   reducers: {
      closeSpinner: (state, action) => {
         state.show = false;
      },
      openSpinner: (state, action) => {
         state.show = true;
         wait(500);
      },
   },
});
//truyền action
export const { closeSpinner, openSpinner } = LoadingSpinnerReducer.actions;
export default LoadingSpinnerReducer.reducer;
