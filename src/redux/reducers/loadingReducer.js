import { createSlice } from '@reduxjs/toolkit';
import { wait } from '@testing-library/user-event/dist/utils';

const initialState = {
   show: false,
};
export const loadingReducer = createSlice({
   name: 'loadingReducer',
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

export const { closeSpinner, openSpinner } = loadingReducer.actions;
export default loadingReducer.reducer;
