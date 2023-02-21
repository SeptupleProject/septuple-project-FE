import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';
const initialState = {
   accounts: [
      {
         username: 'admin',
         password: 'admin',
         role: 'admin',
      },
      {
         username: 'qamanager',
         password: 'qamanager',
         role: 'qaManager',
      },
      {
         username: 'qacoordinator',
         password: 'qacoordinator',
         role: 'qaCoordinator',
      },
      {
         username: 'staff',
         password: 'staff',
         role: 'staff',
      },
   ],
   signedInAccount: {},
};

const accountReducer = createSlice({
   name: 'accountReducer',
   initialState,
   reducers: {
      dangNhapReducer: (state, action) => {
         state.accounts.map((item) => {
            if (item.username === action.payload.username) {
               state.signedInAccount = item;
            }
         });
      },
      dangXuatReducer: (state, action) => {
         state.signedInAccount = action.payload;
      },
   },
});

export const { dangNhapReducer, dangXuatReducer } = accountReducer.actions;

export default accountReducer.reducer;
