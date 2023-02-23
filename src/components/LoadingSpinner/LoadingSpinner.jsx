import React from 'react';

const LoadingSpinner = () => {
   return (
      <div className='spinner-container'>
         <div className='cssload-loader'>
            <div className='cssload-inner cssload-one'></div>
            <div className='cssload-inner cssload-two'></div>
            <div className='cssload-inner cssload-three'></div>
         </div>
      </div>
   );
};

export default LoadingSpinner;
