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
      addCommentReducer: (state, action) => {},
   },
});

export const { getListIdeaReducer, getIdeaDetailReducer, addCommentReducer } =
   ideaReducer.actions;

export default ideaReducer.reducer;
