import { Slide } from 'react-toastify';
import { history } from '../../App';
import {
   addCommentReducer,
   getIdeaDetailReducer,
} from '../reducers/ideaReducer';
import alert from '../../settings/alert';
import { closeSpinner, openSpinner } from '../reducers/loadingReducer';
import {
   createNewIdeaService,
   deleteIdeaService,
   getListIdeaService,
   updateIdeaService,
   getIdeaDetailService,
   incrementViewIdeaService,
} from '../../services/ideaService';
import { getListIdeaReducer } from '../reducers/ideaReducer';
import { http } from '../../services/configAPI';

export const getListIdeaAction = () => {
   return async (dispatch) => {
      try {
         let result = await getListIdeaService();
         dispatch(getListIdeaReducer(result.data.data));
      } catch (error) {
         alert.error(error);
      }
   };
};

export const createNewIdeaAction = (data) => {
   return async (dispatch) => {
      await dispatch(openSpinner());
      try {
         alert.success('Idea is sent successfully');
         await createNewIdeaService(data);
      } catch (error) {
         alert.error(error);
      }
      setTimeout(() => {
         dispatch(closeSpinner());
      }, 500);
   };
};

export const getIdeaDetailAction = (id) => {
   return async (dispatch) => {
      try {
         let result = await getIdeaDetailService(id);
         dispatch(getIdeaDetailReducer(result));
      } catch (error) {
         alert(error);
      }
   };
};

export const incrementViewIdeaAction = (id) => {
   return async () => {
      try {
         await incrementViewIdeaService(id);
         await getListIdeaService();
      } catch (error) {
         alert.error(error);
      }
   };
};

export const updateIdeaAction = (id, data) => {
   return async (dispatch) => {
      await dispatch(openSpinner());
      try {
         await updateIdeaService(id, data);
         let result = await getListIdeaService();
         dispatch(getListIdeaReducer(result.data.data));
      } catch (error) {
         alert.error(error);
      } finally {
         setTimeout(() => {
            dispatch(closeSpinner());
         }, 500);
      }
   };
};

export const deleteIdeaAction = (id) => {
   return async (dispatch) => {
      try {
         await deleteIdeaService(id);
         alert.success(
            'Idea is deleted successfully',
            'top-right',
            Slide,
            'dark'
         );
         let result = await getListIdeaService();
         setTimeout(() => {
            dispatch(getListIdeaReducer(result.data.data));
         }, 500);
      } catch (error) {
         alert.error(error);
      }
   };
};

export const addCommentAction = (comment) => {
   return async (dispatch) => {
      try {
         dispatch(addCommentReducer(comment));
      } catch (error) {
         alert.error(error);
      }
   };
};
