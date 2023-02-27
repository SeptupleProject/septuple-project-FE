import { toast, ToastContainer } from 'react-toastify';
import { history } from '../../App';
import { createNewIdeaReducer } from '../reducers/ideaReducer';
export const createNewIdeaAction = (idea) => {
   return async (dispatch) => {
      try {
         toast.success('Idea is sent successfully', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            theme: 'colored',
         });
         setTimeout(() => {
            dispatch(createNewIdeaReducer(idea));
         }, 700);
      } catch (error) {
         console.log(error);
      }
   };
};
