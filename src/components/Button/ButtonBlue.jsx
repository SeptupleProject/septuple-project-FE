import React from 'react';

const ButtonBlue = (props) => {
   const btnBlue = {
      padding: `${props.padding}`,
      fontSize: `${props.fontSize}`,
      fontWeight: `${props.fontWeigt}`,
   };
   return (
      <button
         style={btnBlue}
         className='button-blue'
      >
         {props.text}
      </button>
   );
};

export default ButtonBlue;
