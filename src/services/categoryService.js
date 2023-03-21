import { http } from './configAPI';

export const getAllCategoryService = () => {
   return http.get('api/Categories');
};
export const getCategoryDropdownService = () => {
   return http.get('api/Categories/dropdown');
};
export const createNewCategoryService = (data) => {
   return http.post('/api/Categories', data);
};
export const updateCategoryService = (id, data) => {
   return http.put(`api/Categories/${id}`, data);
};
export const deleteCategoryService = (id) => {
   return http.delete(`api/Categories/${id}`);
};
