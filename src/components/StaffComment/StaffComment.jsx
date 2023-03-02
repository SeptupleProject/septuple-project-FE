import React from 'react';
import Icon from '../Icon/Icon';
import { useState } from 'react';
const StaffComment = (props) => {
   const { email, content, isCmtAnonymous } = props.item;
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
         paragraph = convertToArray(content).join(' ');
         return paragraph;
      } else {
         if (convertToArray(content).length < 20) {
            for (let i = 0; i < 20; i++) {
               paragraph.push(convertToArray(content)[i]);
            }
            setSeeMore({ text: '', open: false });
            return paragraph.join(' ');
         } else {
            for (let i = 0; i < 30; i++) {
               paragraph.push(convertToArray(content)[i]);
            }
            return paragraph.join(' ') + '. . . ';
         }
      }
   };
   return (
      <div className='row align-middle mx-0 comment'>
         <div className='col-1 text-center px-0'>
            <Icon
               color='#2B6CB0'
               content='fa-regular fa-circle-user'
               fontSize='40px'
            />
         </div>
         <div className='col-11 px-0'>
            <div className='d-flex justify-content-between mt-3'>
               <h2 className='comment-name'>
                  {isCmtAnonymous ? 'Anonymous' : email}
               </h2>
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
               {renderContent()}
               <a
                  onClick={expandContent}
                  className={'text-decoration-none see-more'}
               >
                  {''} {seeMore.text}
               </a>
            </p>
         </div>
      </div>
   );
};

export default StaffComment;
