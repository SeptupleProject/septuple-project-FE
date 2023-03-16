import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   categoryList: [],
   categoryDropdown: [],
};

const categoryReducer = createSlice({
   name: 'categoryReducer',
   initialState,
   reducers: {
      getAllCategoryReducer: (state, action) => {
         state.categoryList = action.payload;
      },
      getCategoryDropdownReducer: (state, action) => {
         state.categoryDropdown = action.payload;
      },
   },
});

export const { getAllCategoryReducer, getCategoryDropdownReducer } =
   categoryReducer.actions;

export default categoryReducer.reducer;
