import React from 'react';
import { useRef, useState } from 'react';
import Icon from '../Icon/Icon';
import { Slide } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../../settings/setting';
import alert from '../../settings/alert';
const Encouragement = (props) => {
   const form = useRef();
   const [bulb, setBulb] = useState(false);
   const sendEmail = (e) => {
      e.preventDefault();
      if (bulb) {
         alert.info('Please wait for a while', null, Slide, 'dark');
      } else {
         if (!bulb) {
            setBulb(!bulb);
            alert.info('Your request is processing', null, Slide, 'dark');
            emailjs
               .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
               .then(
                  (result) => {
                     alert.success('Encouragement sent', null, Slide, 'dark');
                  },
                  (error) => {
                     console.log(error.text);
                  }
               );
         }
         setTimeout(() => {
            setBulb(false);
         }, 300000);
      }
   };

   return (
      <form
         className='text-center'
         ref={form}
         onSubmit={sendEmail}
      >
         <label className='disappear'>Name</label>
         <input
            className='disappear'
            type='text'
            name='user_name'
            defaultValue={props.email}
         />
         <label className='disappear'>Email</label>
         <input
            className='disappear'
            type='email'
            name='user_email'
            defaultValue={props.email}
         />

         <div
            onClick={sendEmail}
            type='submit'
            className='text-center'
         >
            <Icon
               color='#D7B12A'
               fontSize='20px'
               content={
                  bulb ? 'fa-solid fa-lightbulb' : 'fa-regular fa-lightbulb'
               }
            />
         </div>
      </form>
   );
};

export default Encouragement;
