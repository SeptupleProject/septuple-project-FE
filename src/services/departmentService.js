import { http } from './configAPI';

export const getAllDeparmentService = () => {
   return http.get('api/Departments');
};
export const getDepartmentDetailService = (id) => {
   return http.get(`api/Departments/${id}`);
};
export const createDepartmentService = (data) => {
   return http.post('api/Departments', data);
};
export const updateDepartmentService = (id, data) => {
   return http.put(`api/Departments/${id}`, data);
};
export const deleteDepartmentService = (id) => {
   return http.delete(`api/Departments/${id}`);
};
