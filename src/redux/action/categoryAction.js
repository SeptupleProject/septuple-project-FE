import {
   createNewCategoryService,
   deleteCategoryService,
   getAllCategoryService,
   updateCategoryService,
} from '../../services/categoryService';
import alert from '../../settings/alert';
import { getAllCategoryReducer } from '../reducers/categoryReducer';
export const getAllCategoryAction = () => {
   return async (dispatch) => {
      try {
         let result = await getAllCategoryService();
         dispatch(getAllCategoryReducer(result.data.data));
      } catch (error) {
         alert.error(error);
      }
   };
};

export const createNewCategoryAction = (data) => {
   return async (dispatch) => {
      try {
         await createNewCategoryService(data);
         let result = await getAllCategoryService();
         alert.success('Category created successfully', null);
         setTimeout(() => {
            dispatch(getAllCategoryReducer(result.data.data));
         }, 800);
      } catch (error) {
         alert.error(error);
      }
   };
};
export const updateCategoryAction = (id, data) => {
   return async (dispatch) => {
      try {
         await updateCategoryService(id, data);
         alert.success('Category updated successfully', null, null, 'dark');
         let result = await getAllCategoryService();
         setTimeout(() => {
            dispatch(getAllCategoryReducer(result.data.data));
         }, 800);
      } catch (error) {
         alert.error(error);
      }
   };
};
export const deleteCategoryAction = (id) => {
   return async (dispatch) => {
      try {
         await deleteCategoryService(id);
         alert.error('Category removed successfully', null, null, 'dark');
         let result = await getAllCategoryService();
         setTimeout(() => {
            dispatch(getAllCategoryReducer(result.data.data));
         }, 800);
      } catch (error) {
         alert.error(error);
      }
   };
};
