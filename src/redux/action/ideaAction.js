import { Slide } from 'react-toastify';
import {
   getIdeaCommentsByDeptReducer,
   getIdeaDetailReducer,
   getStatisticActionReducer,
   getStatisticIdeaReducer,
} from '../reducers/ideaReducer';
import alert from '../../settings/alert';
import { closeSpinner, openSpinner } from '../reducers/loadingReducer';
import {
   likeIdeaService,
   createNewIdeaService,
   deleteIdeaService,
   getListIdeaService,
   updateIdeaService,
   getIdeaDetailService,
   incrementViewIdeaService,
   dislikeIdeaService,
   getMostViewIdeaService,
   getMostCommentIdeaService,
   getMostLikeIdeaService,
   getMostDislikeIdeaService,
   downloadMediaFileService,
   downloadIdeaFileService,
   getIdeasCommentsByDeptService,
} from '../../services/ideaService';
import { getListIdeaReducer } from '../reducers/ideaReducer';

export const getListIdeaAction = () => {
   return async (dispatch) => {
      try {
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
         alert.error(error);
      }
   };
};
export const getIdeasCommentsByDeptAction = () => {
   return async (dispatch) => {
      try {
         let result = await getIdeasCommentsByDeptService();
         dispatch(getIdeaCommentsByDeptReducer(result.data.result));
      } catch (error) {
         alert.error(error);
      }
   };
};
export const getStatisticIdeaAction = (action) => {
   return async (dispatch) => {
      try {
         let result = [];
         switch (action) {
            case 'views':
               dispatch(getStatisticActionReducer(action));
               result = await getMostViewIdeaService();
               dispatch(getStatisticIdeaReducer(result.data));
               break;
            case 'comments':
               dispatch(getStatisticActionReducer(action));
               result = await getMostCommentIdeaService();
               dispatch(getStatisticIdeaReducer(result.data));
               break;
            case 'likes':
               dispatch(getStatisticActionReducer(action));
               result = await getMostLikeIdeaService();
               dispatch(getStatisticIdeaReducer(result.data));
               break;
            case 'dislikes':
               dispatch(getStatisticActionReducer(action));
               result = await getMostDislikeIdeaService();
               dispatch(getStatisticIdeaReducer(result.data));
               break;
            default:
               dispatch(getStatisticActionReducer('views'));
               result = await getMostViewIdeaService();
               dispatch(getStatisticIdeaReducer(result.data));
               break;
         }
      } catch (error) {
         alert.error(error);
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

export const likeIdeaAction = (id) => {
   return async (dispatch) => {
      try {
         await likeIdeaService(id);
         let result = await getListIdeaService();
         dispatch(getListIdeaReducer(result.data.data));
      } catch (error) {
         alert.error(error);
      }
   };
};

export const dislikeIdeaAtion = (id) => {
   return async (dispatch) => {
      try {
         await dislikeIdeaService(id);
         let result = await getListIdeaService();
         dispatch(getListIdeaReducer(result.data.data));
      } catch (error) {
         alert.error(error);
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

export const downloadMediaFileAction = () => {
   return async (dispatch) => {
      await dispatch(openSpinner());
      try {
         await downloadMediaFileService();
         alert.success('Check your download folder', null, Slide);
      } catch (error) {
         alert.error(error);
      } finally {
         setTimeout(() => {
            dispatch(closeSpinner());
         }, 500);
      }
   };
};

export const downloadIdeaFileAction = () => {
   return async (dispatch) => {
      await dispatch(openSpinner());
      try {
         await downloadIdeaFileService();
         alert.success('Check your download folder', null, Slide);
      } catch (error) {
         alert.error(error);
      } finally {
         setTimeout(() => {
            dispatch(closeSpinner());
         }, 500);
      }
   };
};
