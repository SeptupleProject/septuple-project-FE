import React, { useState, useRef } from 'react';
import { Stack, Heading, Text } from '@chakra-ui/react';
import Icon from '../Icon/Icon';
import { history } from '../../App';
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import moment from 'moment/moment';
import { useDispatch } from 'react-redux';
import { deleteAcademicYearAction } from '../../redux/action/academicYearAction';
import { getAcademicYearDetailAction } from '../../redux/action/academicYearAction';
const AcademicYear = (props) => {
   let { id, name, startDate, endDate, ideaDeadline } = props.item;
   const { isOpen, onOpen, onClose } = useDisclosure();
   const finalRef = useRef(null);
   const dispatch = useDispatch();
   const handleOnDelete = () => {
      dispatch(deleteAcademicYearAction(id));
      setTimeout(() => {
         onClose();
      }, 1000);
   };
   const handleOnUpdate = () => {
      dispatch(getAcademicYearDetailAction(id));
   };
   const renderModal = () => {
      return (
         <Modal
            closeOnOverlayClick={true}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
         >
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Delete Academic Year 2023</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  Are you sure? You can't undo this action after reward
               </ModalBody>

               <ModalFooter>
                  <Button
                     colorScheme='blue'
                     mr={3}
                     onClick={onClose}
                     variant='ghost'
                  >
                     Cancel
                  </Button>
                  <Button
                     onClick={handleOnDelete}
                     colorScheme='red'
                  >
                     Delete
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      );
   };
   return (
      <div className='academicyear-infor px-4 py-3'>
         <div className='d-flex align-middle justify-content-between'>
            <Heading
               fontSize={27}
               className='text-link'
               onClick={handleOnUpdate}
               as='b'
            >
               {name}
            </Heading>
            <div className='d-flex'>
               <div className='mr-3'>
                  <div onClick={handleOnUpdate}>
                     <Icon
                        fontSize='20px'
                        color='#2B6CB0'
                        content='fa-solid fa-pen-to-square'
                     />
                  </div>
               </div>
               <div onClick={onOpen}>
                  <Icon
                     fontSize='20px'
                     color='#FF0000CC'
                     content='fa-regular fa-trash-can'
                  />
               </div>
               {renderModal()}
            </div>
         </div>

         <div className='d-flex mt-4 justify-content-between'>
            <div className='d-flex'>
               <Text
                  as='b'
                  className='text-academicyear-1 mt-1 mr-3'
               >
                  {moment(startDate).format('DD-MM-YYYY')}
               </Text>
               <Icon
                  fontSize='15px'
                  color='black'
                  content='fa-solid fa-arrow-right'
                  className='mt-1 ml-2 '
               />
               <Text
                  as='b'
                  className='text-academicyear-1 mt-1 ml-3'
               >
                  {moment(endDate).format('DD-MM-YYYY')}
               </Text>
            </div>
            <div className='d-flex'>
               <Icon
                  fontSize='15px'
                  color='#2B6CB0'
                  content='fa-solid fa-lightbulb'
                  className='mr-2 '
               />

               <Text
                  as='cite'
                  className='text-academicyear-2 ml-3 mt-1 text-right m-0'
               >
                  {ideaDeadline === null
                     ? 'Not set yet'
                     : moment(ideaDeadline).format('DD-MM-YYYY')}
               </Text>
            </div>
         </div>
      </div>
   );
};

export default AcademicYear;
