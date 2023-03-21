import React from 'react';

const LoadingSpinner = () => {
   return (
      <div className='container-fluid'>
         <div className='spinner-container'>
            <div className='cssload-preloader cssload-loading'>
               <span className='cssload-slice'></span>
               <span className='cssload-slice'></span>
               <span className='cssload-slice'></span>
               <span className='cssload-slice'></span>
               <span className='cssload-slice'></span>
               <span className='cssload-slice'></span>
            </div>
         </div>
      </div>
   );
};

export default LoadingSpinner;
