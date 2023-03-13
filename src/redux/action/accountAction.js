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
   getListUserByRoleService,
} from '../../services/accountService';
import {
   loginReducer,
   logoutReducer,
   getListUserReducer,
   getUserDetailReducer,
   getlistStaffReducer,
   getlistCoordinatorReducer,
} from '../reducers/accountReducer';
import jwt from 'jwt-decode';
import {
   ACCESS_TOKEN,
   emaillKey,
   QAC,
   roleKey,
   Staff,
} from '../../settings/setting';
import alert from '../../settings/alert';

export const loginAction = (account) => {
   return async (dispatch) => {
      try {
         let result = await loginService(account);
         alert.success('Login successfully', null, Slide);
         localStorage.setItem(ACCESS_TOKEN, result.data);
         const decodeAccessToken = jwt(result.data);

         let roleDecoded = '',
            emailDecoded = '',
            idDecoded = '';
         for (const key in decodeAccessToken) {
            if (key === roleKey) {
               roleDecoded = decodeAccessToken[key];
            } else if (key === emaillKey) {
               emailDecoded = decodeAccessToken[key];
            } else if (key === 'Id') {
               idDecoded = decodeAccessToken[key];
            }
         }
         let signedInAccount = {
            id: idDecoded,
            email: emailDecoded,
            role: roleDecoded,
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
         alert.error(error);
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
         alert.error(error);
      }
   };
};

export const getUserDetailAction = (id) => {
   return async (dispatch) => {
      try {
         let result = await getUserDetailService(id);
         dispatch(getUserDetailReducer(result.data));
         alert.success('Wait a minute !', null, Slide, 'dark');
      } catch (error) {
         alert.error(error);
      }
   };
};

export const getlistUserByRoleAction = (role) => {
   return async (dispatch) => {
      try {
         let result = await getListUserByRoleService(role);
         if (role === Staff) {
            dispatch(getlistStaffReducer(result.data.data));
         } else if (role === QAC) {
            dispatch(getlistCoordinatorReducer(result.data.data));
         }
      } catch (error) {
         alert.error(error);
      }
   };
};

export const createUserAction = (data) => {
   return async (dispatch) => {
      try {
         await createUserService(data);
         alert.success('Account has been created');
         setTimeout(() => {
            history.replace('/user-dashboard');
         }, '1000');
      } catch (error) {
         alert.error(error);
      }
   };
};

export const updateUserAction = (id, data) => {
   return async (dispatch) => {
      try {
         await updateUserService(id, data);
         alert.success('Updated successfully', null, Slide);
         setTimeout(() => {
            history.replace('/user-dashboard');
         }, '1000');
      } catch (error) {
         alert.error(error);
      }
   };
};

export const updateUserPasswordAction = (id, data) => {
   return async () => {
      try {
         await updateUserPasswordService(id, data);
         alert.success('Password changed successfully', null);
         setTimeout(() => {
            history.replace('/user-dashboard');
         }, 1000);
      } catch (error) {
         alert.error(error);
      }
   };
};

export const deleteUserAction = (id) => {
   return async (dispatch) => {
      try {
         await deleteUserService(id);
         alert.error('Account has been removed', null, Slide, 'dark');
      } catch (error) {
         alert.error(error);
      }
   };
};
