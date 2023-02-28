import { toast, ToastContainer } from 'react-toastify';
import { history } from '../../App';
import {
   addCommentReducer,
   createNewIdeaReducer,
   deleteIdeaReducer,
} from '../reducers/ideaReducer';
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

export const deleteIdeaAction = (id) => {
   return async (dispatch) => {
      try {
         toast.success('Idea is deleted successfully', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: 0,
            theme: 'dark',
         });
         setTimeout(() => {
            dispatch(deleteIdeaReducer(id));
         }, 700);
      } catch (error) {
         console.log(error);
      }
   };
};

export const addCommentAction = (comment) => {
   return async (dispatch) => {
      try {
         dispatch(addCommentReducer(comment));
      } catch (error) {
         console.log(error);
      }
   };
};
