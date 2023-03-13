import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
export class Alert {
   success = (content, position, transition, theme) => {
      return toast.success(content, {
         position: position ? position : 'top-center',
         autoClose: 700,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: theme ? theme : 'colored',
         transition: transition ? transition : Bounce,
      });
   };
   error = (content, position, transition, theme) => {
      return toast.error(content, {
         position: position ? position : 'top-center',
         autoClose: 700,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: theme ? theme : 'colored',
         transition: transition ? transition : Bounce,
      });
   };
   warning = (content, position, transition, theme) => {
      return toast.warning(content, {
         position: position ? position : 'top-center',
         autoClose: 700,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: theme ? theme : 'colored',
         transition: transition ? transition : Bounce,
      });
   };
   info = (content, position, transition, theme) => {
      return toast.info(content, {
         position: position ? position : 'top-center',
         autoClose: 700,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         theme: theme ? theme : 'colored',
         transition: transition ? transition : Bounce,
      });
   };
}

export default alert = new Alert();
