import {
   createNewCommentService,
   deleteCommentService,
   updateCommentService,
} from '../../services/commentService';
import { getIdeaDetailService } from '../../services/ideaService';

import alert from '../../settings/alert';
import { getIdeaDetailReducer } from '../reducers/ideaReducer';
import { closeSpinner, openSpinner } from '../reducers/loadingReducer';

export const createNewCommentAction = (data, ideaId) => {
   return async (dispatch) => {
      await dispatch(openSpinner());
      try {
         await createNewCommentService(data);
         let result = await getIdeaDetailService(ideaId);
         dispatch(getIdeaDetailReducer(result));
      } catch (error) {
         alert.error(error);
      } finally {
         setTimeout(() => {
            dispatch(closeSpinner());
         }, 500);
      }
   };
};
export const updateCommentAction = (id, data, ideaId) => {
   return async (dispatch) => {
      await dispatch(openSpinner());
      try {
         await updateCommentService(id, data);
         let result = await getIdeaDetailService(ideaId);
         dispatch(getIdeaDetailReducer(result));
      } catch (error) {
         alert.error(error);
      } finally {
         setTimeout(() => {
            dispatch(closeSpinner());
         }, 500);
      }
   };
};
export const deleteCommentAction = (id, ideaId) => {
   return async (dispatch) => {
      await dispatch(openSpinner());
      try {
         await deleteCommentService(id);
         let result = await getIdeaDetailService(ideaId);
         dispatch(getIdeaDetailReducer(result));
      } catch (error) {
         alert.error(error);
      } finally {
         setTimeout(() => {
            dispatch(closeSpinner());
         }, 500);
      }
   };
};
