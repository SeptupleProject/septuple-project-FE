import { Slide } from 'react-toastify';
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
   searchUserByEmailReducer,
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
import { closeSpinner, openSpinner } from '../reducers/loadingReducer';
import { clearListIdeaReducer } from '../reducers/ideaReducer';
import { clearAcademicYearReducer } from '../reducers/academicYearReducer';

export const loginAction = (account) => {
   return async (dispatch) => {
      await dispatch(openSpinner());
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
         dispatch(clearListIdeaReducer());
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
      dispatch(clearAcademicYearReducer());
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

export const getUserDetailAction = (id, requestorRole) => {
   return async (dispatch) => {
      await dispatch(openSpinner());
      try {
         if (requestorRole !== Staff) {
            let result = await getUserDetailService(id);
            dispatch(getUserDetailReducer(result.data));
         }
      } catch (error) {
         alert.error(error);
      } finally {
         setTimeout(() => {
            dispatch(closeSpinner());
         }, 500);
      }
   };
};

export const getlistUserByRoleAction = (role, requestorRole) => {
   return async (dispatch) => {
      await dispatch(openSpinner());
      try {
         if (requestorRole !== Staff) {
            let result = await getListUserByRoleService(role);
            if (role === Staff) {
               dispatch(getlistStaffReducer(result.data.data));
            } else if (role === QAC) {
               dispatch(getlistCoordinatorReducer(result.data.data));
            }
         }
      } catch (error) {
         alert.error(error);
      } finally {
         setTimeout(() => {
            dispatch(closeSpinner());
         }, 500);
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

export const searchUserByEmailAction = (email) => {
   return async (dispatch) => {
      if (email !== '') {
         let result = await getListUserService();
         dispatch(getListUserReducer(result.data));
         dispatch(searchUserByEmailReducer(email));
      } else {
         let result = await getListUserService();
         dispatch(getListUserReducer(result.data));
      }
      try {
      } catch (error) {}
   };
};
