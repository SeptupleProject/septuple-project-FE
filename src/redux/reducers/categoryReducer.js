import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   categoryList: [],
};

const categoryReducer = createSlice({
   name: 'categoryReducer',
   initialState,
   reducers: {
      getAllCategoryReducer: (state, action) => {
         state.categoryList = action.payload;
      },
   },
});

export const { getAllCategoryReducer } = categoryReducer.actions;

export default categoryReducer.reducer;
