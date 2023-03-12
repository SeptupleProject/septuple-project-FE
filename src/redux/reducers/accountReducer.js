import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';
import { history } from '../../App';

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
   },
});

export const {
   logoutReducer,
   loginReducer,
   getListUserReducer,
   getUserDetailReducer,
   getlistStaffReducer,
   getlistCoordinatorReducer,
} = accountReducer.actions;

export default accountReducer.reducer;
