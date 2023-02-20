import { dangNhapReducer } from '../reducers/accountReducer';
import { toast, ToastContainer } from 'react-toastify';
import { history } from '../../App';
export const dangNhapAction = (account) => {
   return async (dispatch) => {
      try {
         toast.success('Đăng nhập thành công', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            theme: 'colored',
         });
         if (account.role == 'admin') {
            setTimeout(() => {
               history.replace('/user-dashboard');
            }, '1500');
         } else if (account.role == 'qaManager') {
            alert('Đăng nhập với vai trò QA Manager');
         } else if (account.role == 'qaCoordinator') {
            alert('Đăng nhập với vai trò QA Coor');
         } else if (account.role == 'staff') {
            alert('Đăng nhập với vai trò Staff');
         }
         await dispatch(dangNhapReducer(account));
      } catch (error) {}
   };
};
