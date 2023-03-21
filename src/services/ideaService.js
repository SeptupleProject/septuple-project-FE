import { http } from './configAPI';

export const getListIdeaService = () => {
   return http.get('api/Ideas');
};
export const getIdeaDetailService = (id) => {
   return http.get(`api/Ideas/${id}`);
};
export const getMostViewIdeaService = () => {
   return http.get('api/Ideas/mostViews');
};
export const getMostCommentIdeaService = () => {
   return http.get('api/Ideas/mostComments');
};
export const getMostLikeIdeaService = () => {
   return http.get('api/Ideas/mostLike');
};
export const getMostDislikeIdeaService = () => {
   return http.get('api/Ideas/mostDislike');
};
export const getIdeasCommentsByDeptService = () => {
   return http.get('api/Ideas/IdeasCommentsByDept');
};
export const createNewIdeaService = (data) => {
   return http.post(`api/Ideas`, data);
};
export const likeIdeaService = (id) => {
   return http.post(`api/Ideas/likeIdea/${id}`);
};
export const dislikeIdeaService = (id) => {
   return http.post(`api/Ideas/dislikeIdea/${id}`);
};
export const incrementViewIdeaService = (id) => {
   return http.put(`api/Ideas/incrementview/${id}`);
};
export const updateIdeaService = (id, data) => {
   return http.put(`api/Ideas/${id}`, data);
};
export const deleteIdeaService = (id) => {
   return http.delete(`api/Ideas/${id}`);
};
export const downloadMediaFileService = () => {
   return http.get('api/Ideas/Download');
};
export const downloadIdeaFileService = () => {
   return http.get('api/Ideas/Download_csv');
};
