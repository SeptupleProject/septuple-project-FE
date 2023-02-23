import { createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';
import { history } from '../../App';

let userSignedIn = '';
if (localStorage.getItem('signedInAccount')) {
   userSignedIn = JSON.parse(localStorage.getItem('signedInAccount'));
}

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
   signedInAccount: userSignedIn,
};

const accountReducer = createSlice({
   name: 'accountReducer',
   initialState,
   reducers: {
      dangNhapReducer: (state, action) => {
         state.signedInAccount = action.payload;
      },
      dangXuatReducer: (state, action) => {
         localStorage.removeItem('signedInAccount');
         history.push('/login');
         state.signedInAccount = '';
      },
   },
});

export const { dangNhapReducer, dangXuatReducer } = accountReducer.actions;

export default accountReducer.reducer;
