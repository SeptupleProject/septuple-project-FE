import { http } from './configAPI';

export const getListIdeaService = () => {
   return http.get('api/Ideas');
};
export const getIdeaDetailService = (id) => {
   return http.get(`api/Ideas/${id}`);
};
export const createNewIdeaService = (data) => {
   return http.post(`api/Ideas`, data);
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
