import { Bounce, Slide, toast, ToastContainer } from 'react-toastify';
import { history } from '../../App';
import {
   createUserService,
   deleteUserService,
   getListUserService,
   getUserDetailService,
   loginService,
   updateUserPasswordService,
   updateUserService,
} from '../../services/accountService';
import {
   loginReducer,
   logoutReducer,
   getListUserReducer,
   getUserDetailReducer,
} from '../reducers/accountReducer';
import jwt from 'jwt-decode';
import { ACCESS_TOKEN } from '../../settings/setting';

export const loginAction = (account) => {
   return async (dispatch) => {
      try {
         let result = await loginService(account);
         toast.success('Log in successfully', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: 'colored',
         });

         localStorage.setItem(ACCESS_TOKEN, result.data);
         const decodeAccessToken = jwt(result.data);
         let roleFromAPI = '',
            emailFromAPI = '';
         for (const key in decodeAccessToken) {
            if (
               key ===
               `http://schemas.microsoft.com/ws/2008/06/identity/claims/role`
            ) {
               roleFromAPI = decodeAccessToken[key];
            } else if (
               key ===
               `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
            ) {
               emailFromAPI = decodeAccessToken[key];
            }
         }
         let signedInAccount = {
            email: emailFromAPI,
            role: roleFromAPI,
         };
         localStorage.setItem(
            'signedInAccount',
            JSON.stringify(signedInAccount)
         );
         dispatch(loginReducer(signedInAccount));
         setTimeout(() => {
            history.replace('/newsfeed');
         }, '1000');
      } catch (error) {
         toast.error(`${error}`, {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
         });
      }
   };
};

export const logoutAction = () => {
   return async (dispatch) => {
      localStorage.removeItem('signedInAccount');
      localStorage.removeItem('ACCESS_TOKEN');
      dispatch(logoutReducer());
      history.replace('/login');
   };
};

export const getListUserAction = () => {
   return async (dispatch) => {
      try {
         let result = await getListUserService();
         dispatch(getListUserReducer(result.data));
      } catch (error) {
         console.log(error);
      }
   };
};

export const getUserDetailAction = (id) => {
   return async (dispatch) => {
      try {
         let result = await getUserDetailService(id);
         dispatch(getUserDetailReducer(result.data));
         toast.success('Wait a minute !', {
            position: 'top-center',
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: 'dark',
            transition: Slide,
         });
         setTimeout(() => {
            history.replace('/user-dashboard/update-user');
         }, 1000);
      } catch (error) {
         console.log(error);
      }
   };
};

export const createUserAction = (data) => {
   return async (dispatch) => {
      try {
         await createUserService(data);
         toast.success('Account has been created', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: 'colored',
         });

         setTimeout(() => {
            history.replace('/user-dashboard');
         }, '1000');
      } catch (error) {
         toast.error(`${error}`, {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: 'colored',
         });
      }
   };
};

export const updateUserAction = (id, data) => {
   return async (dispatch) => {
      try {
         await updateUserService(id, data);
         toast.success(`Updated successfully`, {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: 'colored',
            transition: Slide,
         });
         setTimeout(() => {
            history.replace('/user-dashboard');
         }, '1000');
      } catch (error) {
         console.log(error);
      }
   };
};

export const updateUserPasswordAction = (id, data) => {
   return async () => {
      try {
         await updateUserPasswordService(id, data);
         toast.success('Password changed successfully', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: 'colored',
         });
         setTimeout(() => {
            history.replace('/user-dashboard');
         }, 1000);
      } catch (error) {
         console.log(error);
      }
   };
};
export const deleteUserAction = (id) => {
   return async (dispatch) => {
      try {
         await deleteUserService(id);
         let result = await getListUserService();
         toast.error('Account has been removed', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: 'dark',
            transition: Slide,
         });
         dispatch(getListUserReducer(result.data));
      } catch (error) {
         console.log(error);
      }
   };
};
