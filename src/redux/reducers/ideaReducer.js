import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';

const initialState = {
   listOfIdeas: [],
   ideaDetail: {},
};

const ideaReducer = createSlice({
   name: 'ideaReducer',
   initialState,
   reducers: {
      getListIdeaReducer: (state, action) => {
         state.listOfIdeas = action.payload;
      },
      getIdeaDetailReducer: (state, action) => {
         state.ideaDetail = action.payload;
      },
   },
});

export const { getListIdeaReducer, getIdeaDetailReducer } = ideaReducer.actions;

export default ideaReducer.reducer;
