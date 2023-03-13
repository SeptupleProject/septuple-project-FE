import { history } from '../../App';
import { Slide } from 'react-toastify';
import alert from '../../settings/alert';
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
         alert.success('Wait a minute !', null, Slide, 'dark');
         dispatch(getAcademicYearDetailReducer(result.data));
         setTimeout(() => {
            history.push('/academic-dashboard/update-academic');
         }, 1000);
      } catch (error) {
         console.log(error);
      }
   };
};
export const createNewAcademicYearAction = (data) => {
   return async (dispatch) => {
      try {
         await createNewAcademicYearService(data);
         alert.success('Academic year created');
         setTimeout(() => {
            history.replace('/academic-dashboard');
         }, 1000);
      } catch (error) {
         alert.error(error);
      }
   };
};
export const updateAcademicYearAction = (id, data) => {
   return async (dispatch) => {
      try {
         await updateAcademicYearService(id, data);
         alert.success('Academic year updated');
         let result = await getAllAcademicYearService();
         dispatch(getAllAcademicYearReducer(result.data.data));
         setTimeout(() => {
            history.replace('/academic-dashboard');
         }, 1000);
      } catch (error) {
         alert.error(error);
      }
   };
};
export const deleteAcademicYearAction = (id) => {
   return async (dispatch) => {
      try {
         await deleteAcademicYearService(id);
         alert.error('Academic year removed', null, Slide, 'dark');
         let result = await getAllAcademicYearService();
         setTimeout(() => {
            dispatch(getAllAcademicYearReducer(result.data.data));
         }, 700);
      } catch (error) {
         alert.error(error);
      }
   };
};
