import { history } from '../../App';
import { Bounce, Slide, toast, ToastContainer } from 'react-toastify';

import {
   createNewAcademicYearService,
   deleteAcademicYearService,
   getAcademicYearDetailService,
   getAllAcademicYearService,
   updateAcademicYearService,
} from '../../services/academicYearService';
import {
   getAcademicYearDetailReducer,
   getAllAcademicYearReducer,
} from '../reducers/academicYearReducer';

export const getAllAcademicYearAction = () => {
   return async (dispatch) => {
      try {
         let result = await getAllAcademicYearService();
         dispatch(getAllAcademicYearReducer(result.data.data));
      } catch (error) {
         console.log(error);
      }
   };
};
export const getAcademicYearDetailAction = (id) => {
   return async (dispatch) => {
      try {
         let result = await getAcademicYearDetailService(id);
         dispatch(getAcademicYearDetailReducer(result.data));
      } catch (error) {
         console.log(error);
      }
   };
};
export const createNewAcademicYearAction = (data) => {
   return async (dispatch) => {
      try {
         await createNewAcademicYearService(data);
         toast.success('Academic year created', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: 'colored',
         });
         setTimeout(() => {
            history.replace('/academic-dashboard');
         }, 1000);
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
export const updateAcademicYearAction = (id, data) => {
   return async (dispatch) => {
      try {
         await updateAcademicYearService(id, data);
         toast.success('Academic year updated', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: 'colored',
         });
         setTimeout(() => {
            history.replace('/academic-dashboard');
         }, 1000);
      } catch (error) {
         console.log(error);
      }
   };
};
export const deleteAcademicYearAction = (id) => {
   return async (dispatch) => {
      try {
         await deleteAcademicYearService(id);
         toast.success('Academic year removed', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: 'dark',
            transition: Slide,
         });
      } catch (error) {
         console.log(error);
      }
   };
};
