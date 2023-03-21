import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';

const initialState = {
   listOfIdeas: [],
   ideaDetail: {},
   statisticAction: '',
   statisticList: [],
   mostViewList: [],
   mostLikeList: [],
   mostDislikeList: [],
   mostCommentList: [],
   ideaCommentsByDept: [],
};

const ideaReducer = createSlice({
   name: 'ideaReducer',
   initialState,
   reducers: {
      getListIdeaReducer: (state, action) => {
         state.listOfIdeas = action.payload;
      },
      clearListIdeaReducer: (state, action) => {
         state.listOfIdeas = [];
      },
      getStatisticIdeaReducer: (state, action) => {
         state.statisticList = action.payload;
      },
      getIdeaDetailReducer: (state, action) => {
         state.ideaDetail = action.payload;
      },
      getStatisticActionReducer: (state, action) => {
         state.statisticAction = action.payload;
      },
      getIdeaCommentsByDeptReducer: (state, action) => {
         state.ideaCommentsByDept = action.payload;
      },
      clearIdeaDetailReducer: (state, action) => {
         state.ideaDetail = {};
      },
   },
});

export const {
   getListIdeaReducer,
   getIdeaDetailReducer,
   getStatisticIdeaReducer,
   getStatisticActionReducer,
   getIdeaCommentsByDeptReducer,
   clearIdeaDetailReducer,
   clearListIdeaReducer,
} = ideaReducer.actions;

export default ideaReducer.reducer;
