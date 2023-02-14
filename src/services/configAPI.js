import axios from 'axios';
export const http = axios.create();

http.interceptors.request.use(
   function (config) {
      return { ...config };
   },
   function (error) {
      return Promise.reject(error);
   }
);

http.interceptors.response.use(
   function (response) {
      if (response.data.content) {
         return response.data.content;
      }
      return response;
   },
   function (error) {
      if (error.response.data) {
         return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
   }
);
