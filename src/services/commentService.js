import { http } from './configAPI';

export const createNewCommentService = (data) => {
   return http.post(`api/Comments`, data);
};
export const updateCommentService = (id, data) => {
   return http.put(`api/Comments/${id}`, data);
};
export const deleteCommentService = (id) => {
   return http.delete(`api/Comments/${id}`);
};
