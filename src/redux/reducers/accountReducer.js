import { createSlice, current } from '@reduxjs/toolkit';

let userSignedIn = '';

if (localStorage.getItem('signedInAccount')) {
   userSignedIn = JSON.parse(localStorage.getItem('signedInAccount'));
}

const initialState = {
   signedInAccount: userSignedIn,
   userList: [],
   userDetail: {},
   staffList: [],
   coordinatorList: [],
};

const accountReducer = createSlice({
   name: 'accountReducer',
   initialState,
   reducers: {
      loginReducer: (state, action) => {
         state.signedInAccount = action.payload;
      },
      logoutReducer: (state, action) => {
         state.signedInAccount = '';
         state.userList = [];
         state.staffList = [];
         state.coordinatorList = [];
         state.userList = [];
         state.userDetail = {};
      },
      getListUserReducer: (state, action) => {
         let { data } = action.payload;
         state.userList = data;
      },
      getUserDetailReducer: (state, action) => {
         state.userDetail = action.payload;
      },
      getlistStaffReducer: (state, action) => {
         state.staffList = action.payload;
      },
      getlistCoordinatorReducer: (state, action) => {
         state.coordinatorList = action.payload;
      },
      searchUserByEmailReducer: (state, action) => {
         if (action.payload !== '') {
            state.userList = state.userList.filter((item) => {
               return item.email.match(action.payload);
            });
         }
      },
   },
});

export const {
   logoutReducer,
   loginReducer,
   getListUserReducer,
   getUserDetailReducer,
   getlistStaffReducer,
   getlistCoordinatorReducer,
   searchUserByEmailReducer,
} = accountReducer.actions;

export default accountReducer.reducer;
