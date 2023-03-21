import { http } from './configAPI';
export const getAllAcademicYearService = () => {
   return http.get('api/AcademicYears');
};
export const getAcademicYearDetailService = (id) => {
   return http.get(`api/AcademicYears/${id}`);
};
export const getCurrentAcademicYearService = () => {
   return http.get(`api/AcademicYears/current`);
};
export const createNewAcademicYearService = (data) => {
   return http.post('api/AcademicYears', data);
};
export const updateAcademicYearService = (id, data) => {
   return http.put(`api/AcademicYears/${id}`, data);
};
export const deleteAcademicYearService = (id) => {
   return http.delete(`api/AcademicYears/${id}`);
};
