import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   categoriesList: [
      {
         id: 1,
         name: 'Teaching Program',
      },
      {
         id: 2,
         name: 'Working Environment',
      },
      {
         id: 3,
         name: 'Salary & Benefit',
      },
   ],
};

const categoriesReducer = createSlice({
   name: 'categoriesReducer',
   initialState,
   reducers: {},
});

export const {} = categoriesReducer.actions;

export default categoriesReducer.reducer;
