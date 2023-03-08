import { http } from './configAPI';

export const getListUserService = () => {
   return http.get('api/Users');
};

export const getUserDetailService = (id) => {
   return http.get(`api/Users/${id}`);
};

export const loginService = (data) => {
   return http.post('api/Logins', data);
};

export const createUserService = (data) => {
   return http.post('api/Users', data);
};
export const updateUserService = (id, data) => {
   return http.put(`api/Users/${id}`, data);
};
export const updateUserPasswordService = (id, data) => {
   return http.patch(`api/Users/${id}?newPwd=${data}`);
};
export const deleteUserService = (id) => {
   return http.delete(`api/Users/${id}`);
};
