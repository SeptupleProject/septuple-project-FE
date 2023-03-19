import {
   createNewCategoryService,
   deleteCategoryService,
   getAllCategoryService,
   updateCategoryService,
   getCategoryDropdownService,
} from '../../services/categoryService';
import alert from '../../settings/alert';
import {
   getAllCategoryReducer,
   getCategoryDropdownReducer,
} from '../reducers/categoryReducer';
import { closeSpinner, openSpinner } from '../reducers/loadingReducer';
export const getAllCategoryAction = () => {
   return async (dispatch) => {
      await dispatch(openSpinner());
      try {
         let result = await getAllCategoryService();
         dispatch(getAllCategoryReducer(result.data.data));
      } catch (error) {
         alert.error(error);
      } finally {
         setTimeout(() => {
            dispatch(closeSpinner());
         }, 500);
      }
   };
};

export const createNewCategoryAction = (data) => {
   return async (dispatch) => {
      try {
         await createNewCategoryService(data);
         alert.success('Category created successfully', null);
         let result = await getAllCategoryService();
         await dispatch(openSpinner());
         dispatch(getAllCategoryReducer(result.data.data));
      } catch (error) {
         alert.error(error);
      } finally {
         setTimeout(() => {
            dispatch(closeSpinner());
         }, 500);
      }
   };
};
export const getCategoryDropdownAction = () => {
   return async (dispatch) => {
      try {
         let result = await getCategoryDropdownService();
         dispatch(getCategoryDropdownReducer(result.data));
      } catch (error) {
         alert.error(error);
      }
   };
};
export const updateCategoryAction = (id, data) => {
   return async (dispatch) => {
      await dispatch(openSpinner());
      try {
         await updateCategoryService(id, data);
         alert.success('Category updated successfully', null, null, 'dark');
         let result = await getAllCategoryService();
         dispatch(getAllCategoryReducer(result.data.data));
      } catch (error) {
         alert.error(error);
      } finally {
         setTimeout(() => {
            dispatch(closeSpinner());
         }, 500);
      }
   };
};
export const deleteCategoryAction = (id) => {
   return async (dispatch) => {
      await dispatch(openSpinner());
      try {
         await deleteCategoryService(id);
         alert.info('Category removed successfully', null, null, 'dark');
         let result = await getAllCategoryService();
         dispatch(getAllCategoryReducer(result.data.data));
      } catch (error) {
         alert.error(error);
      } finally {
         setTimeout(() => {
            dispatch(closeSpinner());
         }, 500);
      }
   };
};
