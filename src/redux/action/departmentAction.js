import { Slide } from 'react-toastify';
import {
   createDepartmentService,
   deleteDepartmentService,
   getAllDeparmentService,
   getDepartmentDetailService,
   updateDepartmentService,
} from '../../services/departmentService';
import alert from '../../settings/alert';
import {
   getAllDepartmentReducer,
   getDepartmentDetailReducer,
} from '../reducers/departmentReducer';
import { history } from '../../App';

export const getAllDepartmentAction = () => {
   return async (dispatch) => {
      try {
         let result = await getAllDeparmentService();
         dispatch(getAllDepartmentReducer(result.data.data));
      } catch (error) {
         alert.error(error);
      }
   };
};
export const getDepartmentDetailAction = (id) => {
   return async (dispatch) => {
      let result = await getDepartmentDetailService(id);
      dispatch(getDepartmentDetailReducer(result.data));
      alert.success('Wait a minute !', null, Slide, 'dark');
      setTimeout(() => {
         history.push('/department-dashboard/update-department');
      }, 1000);
      try {
      } catch (error) {
         alert.error(error);
      }
   };
};
export const createDepartmentAction = (data) => {
   return async (dispatch) => {
      try {
         await createDepartmentService(data);
         alert.success('Department created successfully', null, Slide);
         setTimeout(() => {
            history.replace('/department-dashboard');
         }, 1000);
      } catch (error) {
         alert.error(error);
      }
   };
};
export const updateDepartmentAction = (id, data) => {
   return async (dispatch) => {
      try {
         await updateDepartmentService(id, data);
         alert.success('Department updated successfully', null, Slide);
         setTimeout(() => {
            history.replace('/department-dashboard');
         }, 1000);
      } catch (error) {
         console.log(error);
      }
   };
};
export const deleteDepartmentAction = (id) => {
   return async (dispatch) => {
      try {
         await deleteDepartmentService(id);
         alert.success('Department removed successfully', null, Slide, 'dark');
      } catch (error) {
         alert.error(error);
      }
   };
};
