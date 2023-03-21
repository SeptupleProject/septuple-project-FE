import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   departmentList: [],
   departmentDetail: {},
};

const departmentReducer = createSlice({
   name: 'departmentReducer',
   initialState,
   reducers: {
      getAllDepartmentReducer: (state, action) => {
         state.departmentList = action.payload;
      },
      getDepartmentDetailReducer: (state, action) => {
         state.departmentDetail = action.payload;
      },
   },
});

export const { getAllDepartmentReducer, getDepartmentDetailReducer } =
   departmentReducer.actions;

export default departmentReducer.reducer;
