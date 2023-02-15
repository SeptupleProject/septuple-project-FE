import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonBlue = (props) => {
   const btnBlue = {
      padding: `${props.padding}`,
      fontSize: `${props.fontSize}`,
      fontWeight: `${props.fontWeigt}`,
   };
   return (
      <Button
         style={btnBlue}
         className='button-blue'
         variant='solid'
      >
         {props.text}
      </Button>
   );
};

export default ButtonBlue;
