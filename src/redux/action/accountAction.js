import { toast, ToastContainer } from 'react-toastify';
import { history } from '../../App';
import { dangNhapReducer } from '../reducers/accountReducer';
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
         dispatch(dangNhapReducer(account));
         localStorage.setItem('signedInAccount', JSON.stringify(account));
         setTimeout(() => {
            history.replace('/newsfeed');
         }, '1500');
      } catch (error) {}
   };
};
