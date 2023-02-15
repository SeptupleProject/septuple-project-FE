import React from 'react';
import { Route } from 'react-router-dom';
import hehe from '../assets/img/formImg.jpg';
export const FormTemplate = (props) => {
   const bgImageStyle = {
      height: '100vh',
   };
   return (
      <Route
         exact
         path={props.path}
         render={(propsRoute) => {
            return (
               <div className='container-fluid'>
                  <div className='row'>
                     <div className='col-8 px-0'>
                        <img
                           style={bgImageStyle}
                           className='py-0 '
                           src={hehe}
                        />
                     </div>
                     <div className='col-4 text-center form-template'>
                        <props.component {...propsRoute} />
                     </div>
                  </div>
               </div>
            );
         }}
      />
   );
};
