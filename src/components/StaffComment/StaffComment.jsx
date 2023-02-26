import React from 'react';
import Icon from '../Icon/Icon';
import { useState } from 'react';
const StaffComment = (props) => {
   const [seeMore, setSeeMore] = useState({
      text: 'See more',
      open: true,
   });
   let convertToArray = (value) => {
      let convertToString = null;
      if (typeof value == 'string') {
         convertToString = value;
      } else {
         convertToString = JSON.stringify(value);
      }
      return (convertToString = convertToString.split(' '));
   };

   let expandContent = () => {
      if (seeMore.open) {
         setSeeMore({
            text: 'See less',
            open: false,
         });
      } else {
         setSeeMore({
            text: 'See more',
            open: true,
         });
      }
   };

   let renderContent = () => {
      let paragraph = [];
      if (!seeMore.open) {
         paragraph = convertToArray(props.comment).join(' ');
         return paragraph;
      } else {
         if (convertToArray(props.comment).length < 49) {
            for (let i = 0; i < 49; i++) {
               paragraph.push(convertToArray(props.comment)[i]);
            }
            return paragraph.join(' ');
         } else {
            for (let i = 0; i < 50; i++) {
               paragraph.push(convertToArray(props.comment)[i]);
            }
            return paragraph.join(' ') + '. . .';
         }
      }
   };
   return (
      <div className='row align-middle mx-0 comment'>
         <div className='col-1 text-center px-0'>
            <Icon
               color='#2B6CB0'
               content='fa-regular fa-circle-user'
               fontSize='45px'
            />
         </div>
         <div className='col-11 px-0'>
            <div className='d-flex justify-content-between mt-3'>
               <h2 className='comment-name'>{props.name}</h2>
               <div className='d-flex'>
                  <div>
                     <Icon
                        content='fa-solid fa-pen'
                        color='#2B6CB0'
                        fontSize='18px'
                     />
                  </div>
                  <div className='ml-3'>
                     <Icon
                        content='fa-regular fa-trash-can'
                        color='#FF0000'
                        fontSize='18px'
                     />
                  </div>
               </div>
            </div>

            <p className='text-justify text-wrap comment-content mt-2'>
               {renderContent()}{' '}
               <a
                  onClick={expandContent}
                  className={'text-decoration-none see-more'}
               >
                  {seeMore.text}
               </a>
            </p>
         </div>
      </div>
   );
};

export default StaffComment;
