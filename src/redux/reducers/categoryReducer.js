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
      searchCategoryByNameReducer: (state, action) => {
         if (action.payload !== '') {
            state.categoryList = state.categoryList.filter((item) => {
               return item.name
                  .replace(/\s/g, '')
                  .toLowerCase()
                  .match(action.payload);
            });
         }
      },
   },
});

export const {
   getAllCategoryReducer,
   getCategoryDropdownReducer,
   searchCategoryByNameReducer,
} = categoryReducer.actions;

export default categoryReducer.reducer;
