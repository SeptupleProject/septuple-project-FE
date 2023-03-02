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
         id: 1,
         username: 'khadoan@gmail.com',
         password: 'admin',
         role: 'admin',
      },
      {
         id: 2,
         username: 'baodinh@gmail.com',
         password: 'qamanager',
         role: 'qaManager',
      },
      {
         id: 3,
         username: 'namnguyen@gmail.com',
         password: 'qacoordinator',
         role: 'qaCoordinator',
      },
      {
         id: 4,
         username: 'khanhho@gmail.com',
         password: 'staff',
         role: 'staff',
      },
      {
         id: 5,
         username: 'thanhho@gmail.com',
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
