import { http } from './configAPI';

export class BaseService {
   get = (url) => {
      return http.get(url);
   };
}
export const baseService = new BaseService();
